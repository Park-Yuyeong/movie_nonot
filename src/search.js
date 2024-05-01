import { movies, displayMovieData } from "./movieAPI.js";

/** 검색어 함수 */
const $content = document.getElementById("eiga"); //전체 내용을 담을 컴포넌트
const $input = document.getElementById("searchText"); //검색어입력창

export const search_movie = (e) => {
  e.preventDefault();
  const searchText = $input.value.toLowerCase();
  if (!searchText.length) alert("검색창에 글자를 입력해주세요");
  else {
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchText)
    );
    $content.innerHTML = "";
    displayMovieData(filteredMovies);
  }
};
