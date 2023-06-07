import View from './view';

class addRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = `Recipe was successfully uploaded! :)`;

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
    document.addEventListener('keydown', e => {
      if (
        e.key === 'Escape' &&
        !this._overlay.classList.contains('hidden') &&
        !this._window.classList.contains('hidden')
      ) {
        this.toggleWindow();
      }
    });
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function(e) {
      e.preventDefault();
      const dataArray = [...new FormData(this)];
      const data = Object.fromEntries(dataArray)
      handler(data);
    })
  }

  _generateMarkup() {}
}

export default new addRecipeView();
