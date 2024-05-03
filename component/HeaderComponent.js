class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav class="menubar-top">

            <img id="representive-mark" src="style/image/icon.png" />
          </a>
            
          <form class="search-div" id="search_form">
            <input type="text" placeholder="search..." id="searchText" autofocus />
            <img src="style/image/search_icon.png" class="icon-search" id="handleSearch" alt="검색 아이콘" />
          </form>
        </nav>
        `;

    this.setEventReset();
    this.setEventSearch();
  }

  // 로고 이미지 클릭 시 index.html로 이동
  setEventReset() {
    this.querySelector("#representive-mark").addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  // 검색 이벤트 핸들러
  setEventSearch() {
    const $searchButton = this.querySelector("#handleSearch"); // 검색 버튼
    const $searchText = this.querySelector("#searchText"); // 검색어 입력창
    const $searchForm = this.querySelector("#search_form"); // 검색 폼

    $searchButton.addEventListener("click", (e) => {
      e.preventDefault();
      const searchText = $searchText.value.toLowerCase();

      window.location.href = `index.html?search=${searchText}`;
    });
    $searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const searchText = $searchText.value.toLowerCase();

      window.location.href = `index.html?search=${searchText}`;
    });
  }
}

customElements.define("movie-header", HeaderComponent);
