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
    showToggle: '.bugger-show',
    approvePaymentBtn: '.btn-approve',
  }

  return {
    getDomStrings: () => {
      return {
        closeBtn: document.querySelector(DOMStrings.closeToggle),
        showBtn: document.querySelector(DOMStrings.showToggle),
        approveBtn: document.querySelector(DOMStrings.approvePaymentBtn),
      }
    },

    DomStrings: () => {
      return DOMStrings;
    }
  }


})();

// Global App Controller
const Controller = ((dataCtrl, UICtrl) => {

  const setupEventListeners = function() {
    let DOM = UICtrl.DomStrings();
  // console.log(DOM);
    // document.querySelector(DOM.showToggle).addEventListener('click', btnToggle);
    // const btnToggle = () => {
    //   console.log('Hello it works');
    // }

    DOM.approveBtn.addEventListener('click', function(e) {
      alert('Payment approve!!!')
    });
    console.log(DOM)
  };

  return {
    init: function() {
      console.log('Application has started')
      setupEventListeners()
    }
  }

})(DataController, UIController);

Controller.init();