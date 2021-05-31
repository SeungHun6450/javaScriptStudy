// By Search
// OMDb : 영화 검색
// Query String : 검색+문자데이터, 주소?속성=값&속성=값&속성=값

// axios : OMDb로 검색한 요청을 처리해줄수 있는 js패키지, npm i aixos로 설치 후 사용
import axios from 'axios'

function fetchMovies() {
  // 메소드 체이닝 방식
  axios.get('http://www.omdbapi.com/?apikey=7035c60c&s=frozen')
  .then((res) => {
    console.log(res)
    const h1El = document.querySelector('h1')
    const imgEl = document.querySelector('img')
    h1El.textContent = res.data.Search[0].Title
    imgEl.src = res.data.Search[0].Poster
  })
}

fetchMovies()