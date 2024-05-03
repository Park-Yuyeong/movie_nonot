import { callGetMoviesAPI, displayMovieData } from "./movieAPI.js";
import { search_movie } from "./search.js";

const $mark = document.getElementById("representive-mark"); // 메인아이콘
const $searchButton = document.getElementById("handleSearch"); // 검색 버튼
const $searchText = document.getElementById("searchText"); // 검색 입력창
const $searchForm = document.getElementById("search_form");
const $content = document.getElementById("eiga"); //전체 내용을 담을 컴포넌트

const movies = JSON.parse(localStorage.getItem("movies"));

// 이미 불러왔던 영화 데이터가 있으면 안 불러오도록
if (JSON.parse(localStorage.getItem("movies")) === null) {
  console.log("----영화 데이터를 불러옵니다----");
  callGetMoviesAPI();
} else {
  const filteredMovieData = movies.map((movie) => JSON.parse(localStorage.getItem(movie)));
  displayMovieData(filteredMovieData);
}

// 검색 이벤트 핸들러
$searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const searchText = $searchText.value.toLowerCase();
  let contentMovie = search_movie(searchText);
  $content.innerHTML = "";
  displayMovieData(contentMovie);
});
$searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchText = $searchText.value.toLowerCase();
  let contentMovie = search_movie(searchText);
  $content.innerHTML = "";
  displayMovieData(contentMovie);
});

/** 메인으로 돌아가기 */
$mark.addEventListener("click", () => {
  window.location.href = "index.html";
});
