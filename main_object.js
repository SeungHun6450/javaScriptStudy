// 객체 데이터
// 정적(static) 메소드

const userAge = {
  // key : value 형태
  name: 'Heropy',
  age : 85
}
const userEmail = {
  name: 'Heropy',
  email: "thesecon@gmail.com"
}
const user = {
  name: 'Heropy',
  age : 85,
  email: "thesecon@gmail.com"
}


// .assign() : 한개 이상의 출처 객체(소스 객체)로부터 대상 객체(타겟 객체)를 복사할 때 사용
// Object : 전체영역에서 쓸 수 있는 전역 객체,
// assign은 prototype으로 만들어진 메소드가 아니여서 직접 위의 객체를 사용할 수 없음

// const target = Object.assign({}, userAge, userEmail) : 이렇게 되면 userAge는 출처객체가 된다, 비교시 false가 나온다
// const target = Object.assign({}, userAge) : 내용은 같지만 userAge가 바라보고있는 메모리 주소가 새로운 메모리 주소로 할당된다, 비교시 false가 나온다
const target = Object.assign(userAge, userEmail)
console.log(target)
console.log(userAge)
console.log(target === userAge) // true

const a = {k:123}
const b = {k:123}
console.log(a === b)  // false : 다른 주소로 보기 때문에


// .keys() : key들만 출력하여 배열 데이터로 만들어준다
const keys = Object.keys(user)
console.log(keys)
// ['name', 'age', 'email']
console.log(user['email']) // 대괄호를 사용하여 value값을 가져온다

const values = keys.map(key => user[key]) //callback함수, 3회 반복, value값
console.log(values)
