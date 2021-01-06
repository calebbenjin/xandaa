

// Users Dropdown
document.querySelector('#dropdown-nav').addEventListener('click', function() {
  document.querySelector('.dropdown-list').classList.toggle('show-users')
})


// Pages Dropdown
document.querySelector('#page-dropdown').addEventListener('click', function() {
  document.querySelector('.page-list').classList.toggle('show-page')
})


// Finance Dropdown
document.querySelector('#dropdown-finance').addEventListener('click', function() {
  document.querySelector('.finance-list').classList.toggle('show-finance')
})
