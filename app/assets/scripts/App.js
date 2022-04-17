import '../styles/styles.css';
import 'lazysizes';
import HamburgerMenu from './modules/HamburgerMenu';

new HamburgerMenu();

// let modal;
// window.addEventListener("DOMContentLoaded", e => {
//     if (typeof modal == "undefined") {
//         import(/* webpackChunkName: "modal" */'./modules/Modal').then(x => {
//             modal = new x.default();
//             setTimeout(() => modal.openTheModal(), 20);
//         }).catch(() => console.log("error"));
//     } else {
//         modal.openTheModal()
//     }
// })

$('.slider-index__slider').each(function() {
    var $this = $(this);
    var $group = $this.find('.slider-index__slide_group');
    var $slides = $this.find('.slider-index__slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;
    
    function move(newIndex) {
      var animateLeft, slideLeft;
      
      advance();
      
      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }
      
      bulletArray[currentIndex].removeClass('active');
      bulletArray[newIndex].addClass('active');
      
      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }
      
      $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
      });
      $group.animate({
        left: animateLeft
      }, function() {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
      });
    }
    
    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 4000);
    }
    
    $('.slider-index__next_btn').on('click', function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    });
    
    $('.slider-index__previous_btn').on('click', function() {
      if (currentIndex !== 0) {
        move(currentIndex - 1);
      } else {
        move(3);
      }
    });
    
    $.each($slides, function(index) {
      var $button = $('<a class="slider-index__slide_btn">&bull;</a>');
      
      if (index === currentIndex) {
        $button.addClass('active');
      }
      $button.on('click', function() {
        move(index);
      }).appendTo('.slider-index__slide_buttons');
      bulletArray.push($button);
    });
    
    advance();
  });


if (module.hot) {
    module.hot.accept()
};