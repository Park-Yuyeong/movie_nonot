import { Movie } from "./movieData.js";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDIzYzU3MWQ5M2FjZTdiYWQ3YTFkZWE3NWI0YzhhYiIsInN1YiI6IjY2MjY0NjQ0Y2I2ZGI1MDE2M2FlZTI3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FfCrs2-T_js5Cuud3FBlI-obOWez3bf5_bj5KGmuVC0",
  },
};

const $content = document.getElementById("eiga"); //전체 내용을 담을 컴포넌트

const apiUrl =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export let movies = []; // 필터된 api로부터 받아온 데이터를 저장하는 저장소

// API불러오는 함수
export const callGetMoviesAPI = async () => {
  try {
    const response = await fetch(apiUrl, options);
    const data = await response.json();

    console.log(data.results);

    const filteredMovies = data.results.map(
      (i) =>
        new Movie(
          i.original_language,
          i.title,
          i.overview,
          i.vote_average,
          i.poster_path,
          i.id,
          i.release_date
        )
    );
    movies = filteredMovies;
    movies.forEach((i) => i.drawMovieCard());
  } catch (err) {
    $content.innerHTML = `<h3 id="error">API 가져오는데 문제가 생겼습니다</h3>`;
    console.error(err);
  }
};
