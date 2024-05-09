class HeaderComponent extends HTMLElement {
  connectedCallback() {
    // Add your HTML template
    this.innerHTML = `
      <nav class="menubar-top">
        <img id="representive-mark" src="style/image/icon.png" />
        <form class="search-div" id="search_form">
          <input type="text" placeholder="search..." id="searchText" />
          <img src="style/image/search_icon.png" class="icon-search" id="handleSearch" alt="검색 아이콘" />
        </form>
      </nav>
    `;

    // Add your event listeners
    this.setEventReset();
    this.setEventSearch();
  }

  // Logo image click event handler to navigate to index.html
  setEventReset() {
    this.querySelector("#representive-mark").addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  // Search event handler
  setEventSearch() {
    const $searchButton = this.querySelector("#handleSearch"); // Search button
    const $searchText = this.querySelector("#searchText"); // Search input field
    const $searchForm = this.querySelector("#search_form"); // Search form

    $searchButton.addEventListener("click", (e) => {
      e.preventDefault();
      const searchText = $searchText.value.toLowerCase();
      if (!searchText.length) {
        alert("검색창에 글자를 입력해주세요");
      } else {
        window.location.href = `index.html?search=${searchText}`;
      }
    });

    $searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const searchText = $searchText.value.toLowerCase();
      if (!searchText.length) {
        alert("검색창에 글자를 입력해주세요");
      } else {
        window.location.href = `index.html?search=${searchText}`;
      }
    });
  }
}

customElements.define("movie-header", HeaderComponent);
