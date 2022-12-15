//        🧰 Директивы export и import 🧰

const array = [1, 2, 3];
const arrSquared = arr.map(item => item * item);

// экспорт нескольких значений ✅
export { array, arrSquared }; 

// Экспорт с другим именем: директива export as ✅
export { array as arr, arrSquared as sq };

/* Если импортировать нужно всё, что экспортирует модуль,
имена объектов можно не перечислять, а просто поставить *: 
*/

import * as data from './iife.js';

// Длинные имена модулей можно сокращать и при импорте:

import { array as arr, arrSquared as sq } from './data.js.js'

console.log(arr); // [1, 2, 3]
console.log(sq); // [1, 4, 9] 