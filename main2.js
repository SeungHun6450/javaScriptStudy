import random from './getRandom'
import getType from './getType'

// 함수 복습

function sum(x, y){
  // if(x < 2){
  //   return
  // }

  // 변수가 많아 관리가 힘들면 이처럼 쓰면 된다
  // console.log(arguments)
  // return arguments[0] + arguments[1]
  
  return x + y
}

const b = sum(4, 12)

// 단일 사용 시 직접 호출이 효율적이다
console.log(sum(1, 3))
// 여러번 사용 시 변수에 담아 호출하는 것이 효율적이다
console.log(b)


// 화살표 함수
// () => {}  vs  function () {}

const double = function (x) {
  return x * 2
}
console.log('double : ', double(7))

// 축약형으로 사용 가능, {} 사용 시 반환이 되지 않으므로 위에처럼 사용
const doubleArrow = x =>  x * 2
console.log('doubleArrow : ', doubleArrow(7))

const doubleArrow2 = (x,y) =>  (x+y) * 2
console.log('doubleArrow2 : ', doubleArrow2(1,7))
// 객체데이터를 사용 할 경우
const doubleArrow3 = x =>  ({ name: 'Heropy' })
console.log('doubleArrow3 : ', doubleArrow3(7))


// 즉시실행함수
// IEFE, Immediately-Invoked Function Experssion

const a = 7
function double1() {
    console.log(a*2)
}
double1();

(function () {
  console.log(a * 2)
})();

(function () {
  console.log(a * 2)
}());


// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const c = 7

double2()

function double2 () {
  console.log(c * 2)
}

// 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout() : 설정된 Timeout 함수 실행
// clearInterval() : 설정된 Interval 함수 실행

setTimeout(function () {
  console.log('Heropy Timeout!')
}, 3000)

setTimeout(() => {
  console.log('Heropy Timeout!')
}, 3000)

const timer = setTimeout(() => {
  console.log('Heropy Timeout!')
}, 3000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//   clearTimeout(timer)
// })


const timer2 = setInterval(() => {
  console.log('Heropy Clear!')
}, 3000)

const h1El2 = document.querySelector('h1')
h1El2.addEventListener('click', () => {
  clearInterval(timer2)
})


// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

function timeout(callback) {
  setTimeout(() => {
    console.log('Heropy Callback!')
    callback()
  },3000)
}
timeout(() => {
console.log('Done!')
})