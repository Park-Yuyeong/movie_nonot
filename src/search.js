const movies = JSON.parse(localStorage.getItem("movies")); //영화 이름 리스트

/** 검색어 함수 */
export const search_movie = (searchText) => {
  console.log(searchText);

  const filteredMovieTitle = movies.filter((movie) => movie.toLowerCase().includes(searchText));
  const filteredMovieData = filteredMovieTitle.map((movie) => JSON.parse(localStorage.getItem(movie)));
  console.log(filteredMovieData);

  return filteredMovieData;
};
