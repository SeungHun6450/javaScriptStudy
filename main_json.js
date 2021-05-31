 // JSON (JavaScript Object Notation)
 // 자바스크립트의 객체 표기법

 import { remove, sortedLastIndex } from 'lodash'
import myData from './myData.json'

 console.log(myData)
 console.log(typeof myData)

 const user = {
   name: 'HEROPY',
   age: 85,
   emails: [
     'thesecon@gmail.com',
     'neo@zillinks.com'
   ]
 }
 console.log('user', user)

 const str = JSON.stringify(user) // JSON은 전역 객체, stringify: json의 형태로 문자 데이터화 시켜준다
 console.log('str', str)
 console.log(typeof str)

 const obj = JSON.parse(str)  // parse: 분석 -> js에서 활용할 수 있는 데이터로 만들어줌
 console.log('obj', obj)


 // f12 -> application -> Local Storage, Session Storage : 브라우저에서 관리되는 데이터 저장소
 // Local Storage : 데이터는 반 영구적으로 사용, 사용성이 더 높다.
 // Session Storage : 페이지의 세션이 끝날 때(닫을 때) 데이터가 사라진다.

//  localStorage.setItem('user', JSON.stringify(user)) // 실행 후 주석을 하여도 데이터가 남아있다.
//  console.log(JSON.parse(localStorage.getItem('user')))  // 실행 후 주석을 하여도 데이터가 남아있다.

const strI = localStorage.getItem('user')
 const objI = JSON.parse(strI)
 objI.age = 22
 console.log(objI)
 localStorage.setItem('user', JSON.stringify(objI))
//  localStorage.removeItem('user')

// Lowdb : 웹브라우저에서 사용할 수 있는 작은 json기반의 database, 추후 사용해볼 것
 