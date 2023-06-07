import View from './view';
import icons from 'url:../../img/icons.svg'; // Parcel 1

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      console.log(btn);

      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      console.log(goToPage);

      handler(goToPage);
    });
  }

  _generateMarkupButton(num) {
    const currentPage = this._data.page;
    return `
      <button data-goto=${
        num + currentPage
      } class="btn--inline pagination__btn--${num > 0 ? 'next' : 'prev'}">
      <span>Page ${num + currentPage}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-${num > 0 ? 'right' : 'left'}"></use>
      </svg>
    </button> `;
  }

  _generateTotalPageNumber(num) {
    return `
      <div data-goto=${num} class="btn--inline pagination__btn--next">
        <span>Page ${num}</span>
      </div> 
    `;
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);
    

    // Page 1, and there are other pages
    if (currentPage === 1 && numPages > 1) {
      return this._generateMarkupButton(1);
    }

    // Last Page
    if (currentPage === numPages && numPages > 1) {
      return this._generateMarkupButton(-1);
    }

    // Other Page
    if (currentPage < numPages) {
      return `
       ${this._generateMarkupButton(-1)}
       ${this._generateMarkupButton(1)}
      `;
    }

    // Page 1, and there are NO other pages
    return '';
  }
}

export default new PaginationView();
