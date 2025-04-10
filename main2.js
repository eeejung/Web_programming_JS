/* object04.html에서 사용, document로 출력해서 확인할 js */

import {add, substract} from './utils.js';
import {PI, E} from './constants.js';
import {person} from './person.js';

document.getElementById("div1").innerHTML = 
    `<ul>
        <li>person.name: ${person.name}</li>
        <li>person.age: ${person.age}</li>
        <li>add(2, 3): ${add(2, 3)}</li>
        <li>subtract(5, 3): ${substract(5, 3)}</li>
        <li>PI: ${PI}</li>
        <li>E: ${E}</li>
    </ul>`;