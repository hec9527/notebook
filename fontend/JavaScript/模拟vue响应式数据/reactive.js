/*
Map<Obj, Map<Property, Set<effect>>>
*/

const effectMap = new Map();

export function observer(obj) {
  for (const key in obj) {
    console.log(key);
    let internalValue = obj[key];

    Object.defineProperty(obj, key, {
      get() {
        if (effectFn) {
          const set = effectMap.get(key) || new Set();
          effectMap.set(key, set);
          set.add(effectFn);
        }
        return internalValue;
      },
      set(val) {
        internalValue = val;
        const effects = effectMap.get(key);
        if (effects) {
          effects.forEach(fn => fn());
        }
      },
    });
  }
  console.log(obj);
  return obj;
}

let effectFn = null;

export function run(fn) {
  effectFn = fn;
  fn();
  effectFn = null;
}

window.e = effectMap;
