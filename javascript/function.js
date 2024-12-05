import _ from 'lodash';

function someFunc(arg1, arg2) {
  return _.has(arg1, arg2);
}

function dummyFunc() {
  return true
}

export { dummyFunc, someFunc }; 
