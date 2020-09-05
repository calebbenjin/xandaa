// $(document).ready(function() {
//   $('select').niceSelect();
// });


// Data Module
const DataController = (() => {

})();

// UI Controller
const UIController = (() => {

  const DOMStrings = {
    closeToggle: '.toggle-close',
    showToggle: '.bugger-show'
  }

  return {
    getDomStrings: () => {
      return {
        closeBtn: document.querySelector(DOMStrings.closeToggle),
        showBtn: document.querySelector(DOMStrings.showToggle)
      }
    },

    DomStrings: () => {
      return DOMStrings;
    }
  }


})();

// Global App Controller
const Controller = ((dataCtrl, UICtrl) => {

  const btnToggle = () => {
    alert('Hello it works');
  }

  let DOM = UICtrl.DomStrings();
  console.log(DOM);

  document.querySelector(DOM.showToggle).addEventListener('click', btnToggle);

  


})(DataController, UIController);