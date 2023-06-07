class SearchView {
  #parentElement = document.querySelector('.search');

  getQuery() {
    const query =  this.#parentElement.querySelector('.search__field').value;
    this.#clearSearchInput();
    return query;
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener('submit', function(e) {
      e.preventDefault();
      handler()
    })
  }

  #clearSearchInput() {
    this.#parentElement.querySelector('.search__field').value = '';
  }
}

export default new SearchView()