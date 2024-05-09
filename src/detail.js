const urlParams = new URLSearchParams(window.location.search);
const detailMovieTitle = urlParams.get("title"); // 현재 상세페이지 영화 제목

const movie = JSON.parse(localStorage.getItem(detailMovieTitle));

console.log(movie);

const $thumbnail = document.getElementById("thumbnail");
const $title = document.getElementById("title");
const $description = document.getElementById("description");
const $grade = document.getElementById("grade");
const $language = document.getElementById("language");
const $release = document.getElementById("release_date");

$thumbnail.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

$title.innerText = movie.title;
$description.innerText = movie.overview;

let total = "☆☆☆☆☆";
let count = (movie.vote_average / 2).toFixed(1);
total = "⭐".repeat(parseInt(count)) + total.slice(parseInt(count));

$grade.innerText = total + " " + count;
$language.innerText += " " + movie.original_language;
$release.innerText += " " + movie.release_date;
