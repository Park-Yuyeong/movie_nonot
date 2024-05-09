import { callGetMoviesAPI, displayMovieData } from "./movieAPI.js";

const sortByTitle = (movies) => {
  return movies.slice().sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
};

const sortByRating = (movies) => {
  return movies.slice().sort((a, b) => b.vote_average - a.vote_average);
};
const movies = [
  { title: "B", vote_average: 8.5 },
  { title: "A", vote_average: 7.9 },
  { title: "C", vote_average: 9.2 }
];

const handleSortChange = async (value) => {
  try {
    const movies = await callGetMoviesAPI();

    switch (value) {
      case "default":
        displayMovieData(movies);
        break;
      case "title":
        const sortedMoviesByTitle = sortByTitle(movies);
        displayMovieData(sortedMoviesByTitle);
        break;
      case "rating":
        const sortedMoviesByRating = sortByRating(movies);
        displayMovieData(sortedMoviesByRating);
        break;
      default:
        displayMovieData(movies);
    }
  } catch (err) {
    alert("정렬 기능 오류가 발생했습니다");
  }
};

export { handleSortChange };
