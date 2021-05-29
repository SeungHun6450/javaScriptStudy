// 전개 연산자 (Spread) : ...을 사용하여 전개해서 출력, 배열데이터가 전개되서 만들어짐

const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
console.log(fruits)

console.log(...fruits)
// console.log('Apple', 'Banana', 'Cherry')

function toObject(a, b, c){ // 객체 데이터로 변환해주는 함수
// function toObject(a, b, ...c){ // ...c : 나머지 매개변수(rest parameter), c 안에 갯수에 상관없이 전부 담는다
  return {a, b, c}
}

// const toObject = (a, b, ...c) => ({a, b, c}) : 축약형

// console.log(toObject(fruits[0], fruits[1], fruits[2]))
console.log(toObject(...fruits))