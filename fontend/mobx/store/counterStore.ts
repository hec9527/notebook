import { action, autorun, makeObservable, observable } from 'mobx';

const appState = {
  count: 0,

  addCount(num: number = 1) {
    this.count += num;
  },

  reduceCount(num: number = 1) {
    this.count -= num;
  },

  clearCount() {
    this.count = 0;
  },
};

export default makeObservable(appState, {
  count: observable,
  addCount: action,
  reduceCount: action,
});

autorun(() =>
  setInterval(() => {
    appState.addCount();
  }, 500)
);
