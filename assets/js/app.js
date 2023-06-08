// SCROLLSPY
$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});

// SIDENAV
$(document).ready(function(){
  $('.sidenav').sidenav();
});

// MATERIAL IMG
$(document).ready(function(){
  $('.materialboxed').materialbox();
  // $('#materialbox-overlay').materialbox();
});


// get id materialbox-overlay
// use img class materialboxed active to check if active
// add .css style overflow: hidden to materialbox-overlay

// $(document).ready(function(){
//   $('.materialboxed').materialbox();
//   $('img.materialboxed.active').css("overflow", "hidden");
//   .hide("")
// });

// $(document).ready(function(){
//   $('.materialboxed').materialbox();
//   $('#materialbox-overlay').materialbox();
//   if (overlayActive = true) {
//       $('.materialboxed').attr('style', 'overflow: hidden')
//     }
//   overlayActive(true);
// });

// $(document).ready(function(){
//   $('.materialboxed').materialbox();
//   $('#materialbox-overlay').getElementbyID({
//   if (active = true) {
//       $('.materialboxed').attr('style', 'overflow: hidden')
//     }
//   });
//   active(true);
// });

// $(document).ready(function(){
//   $(".materialboxed").materialbox(function(){
//     $("#materialbox-overlay").toggleClass("active-hide");
//   });
// });

// FLOATING ACTION BUTTON
$(document).ready(function(){
  $('.fixed-action-btn').floatingActionButton();
});

// MODAL
$(document).ready(function(){
    $('.modal').modal();
  });

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

// ANIME.JS
// Wrap every letter in a span
document.addEventListener('DOMContentLoaded', ()=> {
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11 .line',
    opacity: 0,
    easing: "easeOutExpo",
  })
});