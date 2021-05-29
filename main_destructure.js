// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당

const user = {
  name: 'Heropy',
  age : 85,
  email: "thesecon@gmail.com"
}
const { name, age, email, address } = user
// const { name, age } = user : 이런식으로 사용할 수도 있다
// const { name, age, address='Korea' } = user : 이런식으로 사용할 수도 있다
// const { name : heropy, age} = user : 이의 경우는 밑에서 ${heropy}로 사용
// E.g user.address

console.log(`사용자의 이름은 ${name}입니다.`)
console.log(`${name}의 나이는 ${age}세입니다.`)
console.log(`${name}의 이메일 주소는 ${email}입니다`)
console.log(address)


// ★배열은 순서대로 추출해야한다
const fruits = ['Apple', 'Banana', 'Cherry']
const [a, b, c, d] = fruits
// const [, a] = fruits : 바나나만 출력
console.log(a, b, c, d)