/* node에서 실행될 js */

import {add, substract} from './utils.js';
// 비동기 객체가 리턴이 됨
// {} == 해당 js 파일에서 가져온걸 분해해서 받아오겠다

import {PI, E} from './constants.js';

import {person} from './person.js';

import multiply from './math.js';

console.log(person.name);
console.log(person.age);

console.log(PI);
console.log(E);

console.log(add(1, 2));
console.log(substract(5, 3));

console.log(multiply(5, 5));    
