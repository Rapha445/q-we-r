import '../styles/styles.css';
import 'lazysizes';
import HamburgerMenu from './modules/HamburgerMenu';
import WatchForHover from './modules/WatchForHover';
import RevealOnLoad from './modules/RevealOnLoad';
import RevealOnScroll from './modules/RevealOnScroll';


new HamburgerMenu();
new WatchForHover();
new RevealOnScroll(document.querySelectorAll(".subtitle"), 60);
new RevealOnScroll(document.querySelectorAll(".about-us"), 25);
new RevealOnScroll(document.querySelectorAll(".schedule"), 60);
// new RevealOnLoad(document.querySelectorAll(".hero__element"));

const H = document.querySelectorAll('.hero__element');
H.forEach(el => {
    el.classList.add("reveal-item");
    })    
document.addEventListener('DOMContentLoaded', reveal);


function reveal(e) {
  setTimeout(function() {
    H.forEach(h => {
      h.classList.add('reveal-item--is-visible');
    })
  }, 1000);
}

if (module.hot) {
    module.hot.accept()
};