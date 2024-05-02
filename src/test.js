const urlParams = new URLSearchParams(window.location.search);
const detailMovieTitle = urlParams.get("title"); // 현재 상세페이지 영화 제목

const movie = JSON.parse(localStorage.getItem(detailMovieTitle));
console.log(movie);

const $img = document.getElementById("img");
const $title = document.getElementById("title");
const $overview = document.getElementById("overview");
const $vote = document.getElementById("vote");
const $language = document.getElementById("language");
const $release = document.getElementById("release");

$img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
$img.width = 300;

$title.innerText += " " + movie.title;
$overview.innerText = movie.overview;

let total = "☆☆☆☆☆";
let count = (movie.vote_average / 2).toFixed(1);
total = "⭐".repeat(parseInt(count)) + total.slice(parseInt(count));

$vote.innerText = total + " " + count;
$language.innerText += " " + movie.original_language;
$release.innerText += " " + movie.release_date;
