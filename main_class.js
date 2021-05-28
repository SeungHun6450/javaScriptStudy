// ES6 Classes

// const heropy = {
//     name: 'Heropy',
//     normal() {
//       console.log(this.name)
//     },
//     arrow: () => { // 범위 시작
//       console.log(this.name)
//     } // 범위 끝
//   }
//   heropy.normal()
//   heropy.arrow()  // undefined


class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const heropy = new User('Heropy', 'Park')
console.log(heropy)
console.log(heropy.getFullName())