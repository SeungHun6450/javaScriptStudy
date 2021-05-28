import getType from './getType'
import random from './getRandom'

// console.log(typeof 'hello world')
// console.log(typeof 123)
// console.log(typeof true)
// console.log(typeof undifined)
// console.log(typeof null)
// console.log(typeof {})
// console.log(typeof [])

// console.log(getType(123))
// console.log(getType(false))
// console.log(getType(null))
// console.log(getType({}))
// console.log(getType([]))

//-----------------------------------------
// 산술 연산자(arithmetic operator)

console.log(1+2)
console.log(5 - 7)
console.log(3 * 4)
console.log(10 / 2)
console.log(7 % 5)  // 나머지

// 할당 연산자(assginment operator)

let a = 2
// a = a + 1
// a += 1
// a -= 1
// a /= 1
// a*= 1
// a % 1
console.log(a)

// 비교 연산자(comparsion operator)

const b = 1
const c = 3

console.log(b === c)
console.log(b !== c)
console.log(b < c)
console.log(b > c)
console.log(b >= c)
console.log(b <= c)

function isEqual(x, y){
  return x === y
}

console.log(isEqual(1, 1))
console.log(isEqual(2, '2'))


// 논리 연산자(logical operator)

const d = 1 === 1
const e = 'AB' === 'AB'
const f = false
const g = 1 === 123

console.log(d)
console.log(e)
console.log(f)

console.log('&&: ', d && e)
console.log('&&: ', d && e && f)
console.log('||: ', d || e)
console.log('||: ', f || g)
console.log('!: ', !g)


// 삼항 연산자(ternary operator)

const h = 1 < 2
if(h) {
  console.log('참')
} else {
  console.log('거짓')
}

console.log(h ? '참' : '거짓')


// 조건문 (If statement)

const i = random()

if(i === 0) {
  console.log('i is 0')
} else if(i === 2) {
  console.log('i is 2')
} else if(i === 4) {
  console.log('i is 4')
} else {
  console.log('i is not 0 or 2 or 4')
}


// 조건문 (Switch statement)

const j = random()

switch (j) {
  case 0: 
    console.log('j is 0')
    break
  case 2: 
    console.log('j is 2')
    break
  case 4: 
    console.log('j is 4')
    break
  default: console.log('j is not 0 or 2 or 4')
}


// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul')

for (let i = 0; i < 10; i += 1){
  const li = document.createElement('li')
  li.textContent =`list-${i + 1}`
    if ((i+1) % 2 === 0){
      li.addEventListener('click', function () {
        console.log(li.textContent)
    })
  }
  ulEl.appendChild(li)
}


// 변수 유효범위(Variable Scope)
// var, let, const

// var : 함수레벨의 유효 범위를 가짐 즉 의도하지 않는 결과가 될 수 있다.
// 블록레벨의 유효 범위에 동작하는 let과 const를 사용해야한다.
function scope() {
  // console.log(k)
  if (true){
    // console.log(k)
    const k =123
    console.log(k)
  }
  // console.log(k)
}

scope()


// 형 변환(Type conversion)

const l = 1;
const m = '1'

console.log(l === m)
// == : 동등 연산자, 형 변화가 자동으로 일어남, 즉 의도와 다른 값이 나올 수 있음
console.log(l == m)

// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(거짓 같은 값) ★여기만 외워둘 것
// false, '', null. undefined, 0, -0, NaN

if('false'){
  console.log(123)
}
if(0){
  console.log(123)
}