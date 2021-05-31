import _ from 'lodash'; // From `node_modules`!
import checkType from './getType';  // getType.js
import { random, user } from './getRandom';  // getRandom.js
// import { random, user as heropy } from './getRandom';  // getRandom.js
// import * as R from './getRandom';  // getRandom.js, *: 와일드 카드(여러 내용을 한번에 지정할 목적으로 사용)

console.log(_.camelCase('the hello world'))
console.log(checkType([1, 2, 3]))
console.log(random(), random())
console.log(user)
// console.log(heropy)
// console.log(R)