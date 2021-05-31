// export default function getType(data) {
export default function (data) { // default로 되어있는 경우 이름을 지정하지 않아도 된다
  return Object.prototype.toString.call(data).slice(8, -1)
}

// 기본 통로로 나오고 있어서 하나의 파일에서 하나의 데이터만 내보내진다
// 즉, export default는 딱 한번만 내보낼 수 있다.