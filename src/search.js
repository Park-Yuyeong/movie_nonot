import { displayMovieData } from "./movieAPI.js";

const $content = document.getElementById("eiga"); //전체 내용을 담을 컴포넌트
const $input = document.getElementById("searchText"); //검색어입력창

const movies = JSON.parse(localStorage.getItem("movies")); //영화 이름 리스트

/** 검색어 함수 */
export const search_movie = (e) => {
  e.preventDefault();
  const searchText = $input.value.toLowerCase();
  if (!searchText.length) alert("검색창에 글자를 입력해주세요");
  else {
    console.log(movies);
    const filteredMovieTitle = movies.filter((movie) => movie.toLowerCase().includes(searchText));
    const filteredMovieData = filteredMovieTitle.map((movie) => JSON.parse(localStorage.getItem(movie)));
    console.log(filteredMovieData);
    $content.innerHTML = "";

    displayMovieData(filteredMovieData);
  }
};
