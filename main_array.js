const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

// .length : 길이
// console.log(numbers[1])
// console.log(fruits[2])
// console.log(numbers.length)
// console.log(fruits.length)
// console.log([1, 2].length)


// .concat() : 사용해도 원본의 데이터는 그대로 유지됨
// console.log(numbers.concat(fruits))
// console.log(numbers)
// console.log(fruits)


// .forEach() : 반복문
// fruits.forEach(function (element, index, array){
//   console.log('element : ', element, '| index : ', index,  "| array : ",array)
// })

// fruits.forEach(function (fruit, i){
//   console.log(fruit, i)
// })


// .map() : forEach()와 다른 점은 인수로 사용하는 callback에 내부에서 반환하는 하나의 데이터를 가지고 그 데이터를 가지는 새로운 배열을 만들어 반환
// const a = fruits.forEach((fruit, index) => {
//   console.log(`${fruit}-${index}`)
// })
// console.log(a)

// const b = fruits.map(function (fruit, index){
//   // return `${fruit}-${index}`
//   return {  // 객체 리터럴 방식
//     id: index,
//     name: fruit
//   }
// })
// console.log(b)

// const c = fruits.map((fruit, index) => ({
//   id: index,
//   name: fruit
// }))
// console.log(c)


// .filter() : 일부내용을 걷어내고 새로운 배열을 만든다
// const a = numbers.map(number => {
//   return number < 3
// })
// const a = numbers.map(number =>  number < 3)
// console.log(a)

// const b = numbers.filter(number => {
//   return number < 3
// })
// const b = numbers.filter(number => number < 3)
// console.log(b)

// console.log(numbers)



// .find() : 원하는 item 찾기
//  .findIndex() : 찾아진 item의 index 번호를 반환
// const a = fruits.find(fruit => {
  // return /^B/.test(fruit) // B로 시작하는 정규식
  // return /^C/.test(fruit) // C로 시작하는 정규식
// })
// const a = fruits.find(fruit =>  /^B/.test(fruit) )
// console.log(a)

// const b = fruits.findIndex(fruit => {
//   return /^C/.test(fruit) // C로 시작하는 정규식
// })
// const b = fruits.findIndex(fruit => /^C/.test(fruit))
// console.log(b)



// .includes() : 포함이 되어있는지 true, false
// const a = numbers.includes(3)
// console.log(a)

// const b = fruits.includes('HEROPY')
// console.log(b)


// .push() : 배열의 가장 뒤쪽에 데이터 삽입
// .unshift() : 배열의 가장 앞쪽에 데이터 삽입
// ★원본이 수정되므로 주의!
// numbers.push(5)
// console.log(numbers)

// numbers.unshift(0)
// console.log(numbers)


// .reverse() : 배열 데이터가 뒤집어짐
// ★원본이 수정되므로 주의!
// numbers.reverse()
// fruits.reverse()
// console.log(numbers)
// console.log(fruits)


// .splice() : (index, index에서 ''개를 지워라), (index, 0, 끼워 넣을 값), (index, index에서 ''개를 지워라, 끼워 넣을 값)
// 특정 index의 값을 지우기도 하지만 끼워넣기 용도로도 사용 가능
// ★원본이 수정되므로 주의!
// numbers.splice(2, 0)
// numbers.splice(2, 1)
// numbers.splice(2, 0, 999)
// fruits.splice(2, 0, 'Orange')
// console.log(numbers)
// console.log(fruits)