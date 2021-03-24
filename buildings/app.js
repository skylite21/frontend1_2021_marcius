
// ha a menu-button-ra rákattintunk...
document.querySelector('.menu-button').addEventListener('click', function() {
  console.log('you clicked the menu button!');
  // css class-t kapnak bizonyos elemek...
  document.querySelector('body').classList.add('js-menu-open');
  document.querySelector('.menu-button').classList.add('js-hidden');
  document.querySelector('header .main-menu').classList.add('js-show');
  document.querySelector('.close-menu').classList.remove('js-hidden');

} );


