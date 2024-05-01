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

    const filteredMovies = data.results.map((movies) => ({
      //필요한 정보만 filteredMovies에 넣는다
      original_language: movies.original_language,
      title: movies.title,
      overview: movies.overview,
      vote_average: movies.vote_average,
      poster_path: movies.poster_path,
      id: movies.id,
    }));
    movies = filteredMovies;
    displayMovieData(filteredMovies);
    console.log(filteredMovies);
  } catch (err) {
    $content.innerHTML = `<h3 id="error">API 가져오는데 문제가 생겼습니다</h3>`;
    console.error(err);
  }
};

// 데이터 필터링 함수
export const displayMovieData = (movie_data) => {
  if (!movie_data.length) {
    $content.innerHTML = `<h3 id="error">해당 검색어에 대한 데이터가 존재하지 않습니다!</h3>`;
    return;
  }
  $content.innerHTML = movie_data.reduce((_movie_list, cur_movies) => {
    let total = "☆☆☆☆☆";
    let count = (cur_movies.vote_average / 2).toFixed(1);
    total = "⭐".repeat(parseInt(count)) + total.slice(parseInt(count));

    return (_movie_list += `
      <div id="cardDiv" class="card" onclick="alert('영화 id : ${cur_movies.id}')">
        <img src="https://image.tmdb.org/t/p/w500${cur_movies.poster_path}" id="img"/>
        <div id="overviewDiv">
          <p id="overview">${cur_movies.overview}</p>
        </div>
        <h3 id="title">${cur_movies.title}</h3>
        <p id="vote">${total} (${count})</p>
        <p id="language">language : ${cur_movies.original_language}</p>
      </div>
      `);
  }, "");
};
