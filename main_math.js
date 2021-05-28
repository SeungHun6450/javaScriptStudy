const pi = 3.141592265358979
console.log(pi)

const str = pi.toFixed(2)
console.log(str)
console.log(typeof str)

const integer = parseInt(str)
const float = parseFloat(str)
console.log(integer)
console.log(float)
console.log(typeof integer, typeof float)

console.log('abc : ', Math.abs(-12))  // 절대값
console.log('min : ', Math.min(2, 8))
console.log('max : ', Math.max(2, 8))
console.log('ceil : ', Math.ceil(3.14)) //올림
console.log('floor : ', Math.floor(3.14)) // 내림
console.log('round : ', Math.round(3.14)) // 반올림
console.log('random : ', Math.random()) // 난수, 0 ~ 1 사이의 숫자