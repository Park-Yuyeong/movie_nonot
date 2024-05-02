document.addEventListener("DOMContentLoaded", () => {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTAyNzcxYTQ3YTI4YzIzMDk1OGE0NjJjYmQzMDA2OSIsInN1YiI6IjY2MjlmYTBlZDE4YjI0MDA5YmRlMDEwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RmDcbNB7AxtkDNgTYr301oBdcuZiuniDqQyZ2emzlWo",
        },
    };

    const apiKey = "4102771a47a28c230958a462cbd30069";
    const apiUrl = "https://api.themoviedb.org/3/movie/top_rated";

    fetch(`${apiUrl}?api_key=${apiKey}`, options)
        .then((response) => response.json())
        .then((data) => {
            const movie = data.results[0];
            const contents = document.getElementById("contents");
            contents.innerHTML = `
                <img class="thumbnail" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="">
                <div>
                    <div class="title">${movie.title}</div>
                    <div class="grade">평점: ${movie.vote_average}</div>
                    <div class="release_date">개봉일: ${movie.release_date}</div>
                    <div class="description">${movie.overview}</div>
                </div>
            `;
        })
        .catch((error) => {
            console.error(error);
        });
});
