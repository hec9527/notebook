function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      track(target, key); // 追踪属性的依赖
      return target[key];
    },
    set(target, key, value) {
      target[key] = value;
      trigger(target, key); // 触发属性的更新
      return true;
    },
  });
}

// 用于保存属性的依赖关系
const targetMap = new WeakMap();

function track(target, key) {
  let depMap = targetMap.get(target);
  if (!depMap) {
    depMap = new Map();
    targetMap.set(target, depMap);
  }

  let deps = depMap.get(key);
  if (!deps) {
    deps = new Set();
    depMap.set(key, deps);
  }

  deps.add(activeEffect);
}

function trigger(target, key) {
  const depMap = targetMap.get(target);
  if (!depMap) {
    return;
  }

  const deps = depMap.get(key);
  if (!deps) {
    return;
  }

  deps.forEach(effect => {
    effect(); // effect为追踪的函数
  });
}

function effect(fn) {
  activeEffect = fn;
  fn(); // 第一次执行，收集依赖
  activeEffect = null;
}

// 示例数据
const data = {
  name: 'Alice',
  age: 25,
};

// 创建响应式对象
const reactiveData = reactive(data);

// 定义追踪的函数
const printName = () => {
  console.log(`Name changed to ${reactiveData.name}`);
};

// 追踪属性的依赖
effect(printName);

// 修改响应式对象
reactiveData.name = 'Bob';
// 输出：Name changed to Bob
