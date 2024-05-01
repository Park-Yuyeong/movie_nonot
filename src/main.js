import { callGetMoviesAPI, displayMovieData } from "./movieAPI.js";
import { search_movie } from "./search.js";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDIzYzU3MWQ5M2FjZTdiYWQ3YTFkZWE3NWI0YzhhYiIsInN1YiI6IjY2MjY0NjQ0Y2I2ZGI1MDE2M2FlZTI3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FfCrs2-T_js5Cuud3FBlI-obOWez3bf5_bj5KGmuVC0",
  },
};

const $mark = document.getElementById("representive-mark"); // 메인아이콘
const $handleSearch = document.getElementById("handleSearch"); //검색어 실행버튼
const $input = document.getElementById("searchText"); //검색어입력창

callGetMoviesAPI();

$handleSearch.addEventListener("click", search_movie);
$input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") search_movie(e);
});

/** 메인으로 돌아가기 */
$mark.addEventListener("click", () => {
  window.location.href = "index.html";
});
