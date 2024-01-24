import { add, multiply } from './mathFunctions.js';
import test, { DEFAULT_PRICE as changedName } from './productRow.js';

const sum = add(2, 5);
const prod = multiply(5, 6);

console.log(sum);
console.log(prod);

console.log(test('Apple'));
console.log(changedName);