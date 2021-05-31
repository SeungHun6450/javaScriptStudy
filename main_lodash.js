import _ from 'lodash'; // 기본 통로를 통해 나오는 데이터

const usersA = [
  { userId: '1', name: 'HEROPY'},
  { userId: '2', name: 'Neo'}
]
const usersB = [
  { userId: '1', name: 'HEROPY'},
  { userId: '3', name: 'Amy'}
]

const usersC = usersA.concat(usersB)
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId')) // uniqBy : 중복되는 부분 제거, 한 개

const usersD = _.unionBy(usersA, usersB, 'userId')  // unionBy : 합치기 전 여러게 배열 데이터를 먼저 적고 마지막에 합칠 때 고유화 작업을 시킬 속성을 명시해주면 고유화가 된 새로운 배열을 반환됨, 여러개
console.log('uniqBy', usersD)


const users = [
  { userId: '1', name: 'HEROPY'},
  { userId: '2', name: 'Neo'},
  { userId: '3', name: 'Amy'},
  { userId: '4', name: 'Evan'},
  { userId: '5', name: 'Lewis'},
]

const foundUser = _.find(users, {name: 'Amy' }) // find : 무엇인가를 찾을 때 사용
const foundUserIndex = _.findIndex(users, { name: 'Amy'}) // findIndex : 해당하는 객체의 index번호를 반환함
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, { name: 'Neo' }) // remove : 해당 객체 데이터를 제거
console.log(users)