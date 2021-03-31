new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  effect: 'fade',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


flatpickr('.datepicker', {
  minDate: 'today'
});

new SmoothScroll('a[href*="#"]');

window.addEventListener('scroll', function() {
  // console.log(window.scrollY);
  if(window.scrollY >= 500) {
    document.querySelector('header').classList.add('darken');
  } else {
    document.querySelector('header').classList.remove('darken');
  }
});


// ha let-el hozunk létre változót, annak az értékét később
// tudjuk módosítani, a const-al létrehozott változó értékét
// nem tudjuk módosítani
const endValue = 567;
// ha számot adunk értékül az number típus
let currentValue = 0;
const counter = document.querySelector('.counter');
// boolean: két értéke lehet, true vagy false
let alreadyPlayed = false;

const observer = new IntersectionObserver(function(entries){

  // isIntersecting is true when element and viewport are overlapping
  // isIntersecting is false when element and viewport don't overlap
  if(entries[0].isIntersecting === true && alreadyPlayed != true) {
    // console.log('most lett látható az elem');
    alreadyPlayed = true;
    const timer = setInterval(function(){
      if(currentValue >= endValue) {
        clearInterval(timer);
      }
      counter.innerText = currentValue;
      currentValue = currentValue + 1;
      // megnöveljük a változó értékét 1-el
      // currentValue++;

    }, 2);
  }

});

observer.observe(counter);
