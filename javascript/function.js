import _ from 'lodash';

function someFunc(arg1, arg2) {
  return _.has(arg1, arg2);
}

function flaky(arg1, arg2) {
  return Math.random() < 0.5
}

function dummyFunc() {
  return true
}

export { dummyFunc, someFunc, flaky }; 
