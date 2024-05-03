class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <nav class="menubar-top">
                <img id="representive-mark" src="style/image/icon.png" />
                <form class="search-div" id="search_form">
                    <input type="text" placeholder="search..." id="searchText" autofocus />
                    <img src="style/image/search_icon.png" class="icon-search" id="handleSearch" alt="검색 아이콘" />
                </form>
            </nav>
        `;
  }
}

customElements.define("movie=header", HeaderComponent);
