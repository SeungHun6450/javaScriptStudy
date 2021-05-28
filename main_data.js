// JS 데이터

// String : "". '', ``
// Number
// Boolean: true, false
// undefined
// null
// Array: []
// Object: {}


// String.prototype.indexOf()
const str = '0123'
console.log(str.length)
console.log('01 23'.length)

const str2 = 'Hellow world!'
console.log(str2.indexOf('world'))
console.log(str2.indexOf('HEROPY') !== -1) // false
console.log(str2.replace(' world!', ''))
console.log(str2.slice(0,3)) // 시작, 끝 전

const str3 = 'toffg6450@naver.com'
console.log(str3.match(/.+(?=@)/)[0]) // @앞을 추출

const str4 = '     Hellow world!       '
console.log(str4.trim())