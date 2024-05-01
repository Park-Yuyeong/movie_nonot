export class Movie {
  constructor(
    original_language,
    title,
    overview,
    vote_average,
    poster_path,
    id,
    release_date
  ) {
    this.original_language = original_language;
    this.title = title;
    this.overview = overview;
    this.vote_average = vote_average;
    this.poster_path = poster_path;
    this.id = id;
    this.release_date = release_date;
  }

  // 영화 카드 draw 함수
  drawMovieCard() {
    const $content = document.getElementById("eiga"); //전체 내용을 담을 컴포넌트

    let total = "☆☆☆☆☆";
    const count = (this.vote_average / 2).toFixed(1);
    total = "⭐".repeat(parseInt(count)) + total.slice(parseInt(count));

    const tempHtml = `
        <div id="cardDiv" class="card" onclick="alert('영화 id : ${this.id}')">
            <img src="https://image.tmdb.org/t/p/w500${this.poster_path}" id="img"/>
            <div id="overviewDiv">
                <p id="overview">${this.overview}</p>
            </div>
            <h3 id="title">${this.title}</h3>
            <p id="vote">${total} (${count})</p>
            <p id="language">language : ${this.original_language}</p>
        </div>`;

    $content.insertAdjacentHTML("beforeend", tempHtml);
  }
}
