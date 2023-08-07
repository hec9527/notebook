import { observer, run } from './reactive.js';

const state = observer({
  name: '张三',
  age: 24,
  location: {
    provence: 'SiChuan',
    city: 'SuiNing',
    country: 'SheHong',
  },
});

function renderLastName() {
  document.getElementById('lastName').innerText = state.name.slice(0, 1);
}

function renderFirstName() {
  document.getElementById('firstName').innerText = state.name.slice(1);
}

function renderAge() {
  document.getElementById('age').innerText = state.age;
}

function renderProvence() {
  document.getElementById('provence').innerText = state.location.provence;
}

function renderCity() {
  document.getElementById('city').innerText = state.location.city;
}

function renderCountry() {
  document.getElementById('country').innerText = state.location.country;
}

function render() {
  run(renderLastName);
  run(renderFirstName);
  run(renderAge);
  run(renderProvence);
  run(renderCity);
  run(renderCountry);
}

render();

window.s = state;

window.changeName = e => {
  console.log(e);
  state.name = e.target.value;
};

window.changeAge = e => {
  state.age = e.target.age;
};

window.changeLocation = e => {
  const arr = e.target.value.split(' ').filter(Boolean);
  state.location.provence = arr[0];
  state.location.city = arr[1];
  state.location.country = arr[2];
};
