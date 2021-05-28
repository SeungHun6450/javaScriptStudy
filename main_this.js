// this
// 일반(Normal) 함수는 호출 위치에 따라 this 정의
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!


// 1. this 예제1
// const heropy = {
//   name: 'Heropy',
//   normal: function () {
//     console.log(this.name)
//   },
//   arrow: () => { // 범위 시작
//     console.log(this.name)
//   } // 범위 끝
// }
// heropy.normal()
// heropy.arrow()  // undefined

// const amy = {
//   name: 'Amy',
//   normal: heropy.normal,
//   arrow: heropy.arrow
// }
// amy.normal()
// amy.arrow() // undefined



// 2. this 예제2
// function User(name) {
//   this.name = name
// }
// User.prototype.normal = function () {
//   console.log(this.name)
// }
// User.prototype.arrow = () =>  {
//   console.log(this.name)
// }

// const heropy = new User('Heropy')

// heropy.normal()
// heropy.arrow()

// 3. this 예제 3
const timer = {
  name: 'Heropy!!',
  timeout: function () {
    setTimeout(() => {
      console.log(this.name)
    }, 2000)
  }
}
timer.timeout()


// 4.
// const heropy = {
//   firstName: 'Heropy',
//   lastName : 'Park',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(heropy.getFullName())

// const amy = {
//   firstName: 'Amy',
//   lastName: 'Clarke',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(amy.getFullName())

// const neo = {
//   firstName: 'Neo',
//   lastName: 'Smith',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(neo.getFullName())


// 5.
// 리터럴 방식 : const heropy = {}


// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

// const heropy = new User('Heropy', 'Park') // 생성자 함수, 하나의 객체 데이터가 생성됨, heropy, amy들은 인스턴스
// const amy = new User('Amy', 'Clarke')
// const neo = new User('Neo', 'Smith')


// console.log(heropy.getFullName()) // prototype쪽을 참조
// console.log(amy)
// console.log(neo)

