import _ from 'lodash'


// 얕은 복사(Shallow copy), 깊은 복사(Deep Copy)
const user = {
  name: 'Heropy',
  age : 85,
  emails: ['thesecon@gmail.com']
}

// copyUser도 똑같이 수정이 됨, 바라보고 있는 메모리 주소가 같음
// const copyUser = user

// 얕은 복사 방법
// 1. {}인 새로운 객체데이터가 새로운 메모리 주소를 가지게 된다
// const copyUser = Object.assign({}, user)

// 2. 전개 연산자 사용 (...), 새로운 메모리에 만들어짐
// const copyUser = {...user}

// 깊은 복사 방법 (lodash 이용)
// _.cloneDeep() : 재귀(하나의 데이터 안에서 어떠한 내용이 계속 반복 실행)하면서 모든 값들을 복제 하여 깊은 복사가 가능해진다
const copyUser = _.cloneDeep(user)
console.log(copyUser == user)

user.age = 22
console.log('user : ', user)
console.log('copyUser : ', copyUser)  
console.log('------')
console.log('------')


user.emails.push('neo@zillinks.com')
// 같은 참조형 데이터이기 때문에 메모리 주소를 공유하는 상태
// lodash 사용 시 깊은 복사가 되어 false
console.log(user.emails === copyUser.emails)
console.log('user : ', user)
console.log('copyUser : ', copyUser)