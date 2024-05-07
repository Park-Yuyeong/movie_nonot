// main.js

import { callGetMoviesAPI, displayMovieData } from "./movieAPI.js";
import { search_movie } from "./search.js";

const urlParams = new URLSearchParams(window.location.search);
const searchMovies = urlParams.get("search"); // 현재 검색 중인 text

const movies = JSON.parse(localStorage.getItem("movies"));

// 이미 불러왔던 영화 데이터가 있으면 안 불러오도록
if (JSON.parse(localStorage.getItem("movies")) === null) {
  console.log("----영화 데이터를 불러옵니다----");
  callGetMoviesAPI();
} else if (searchMovies === null) {
  const filteredMovieData = movies.map((movie) => JSON.parse(localStorage.getItem(movie)));
  displayMovieData(filteredMovieData);
} else {
  // 검색 중인 text가 있으면 해당 text가 title에 포함되어 있는 영화만 나열
  let contentMovie = search_movie(searchMovies);
  displayMovieData(contentMovie);
}
