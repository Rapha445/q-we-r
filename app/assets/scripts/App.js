import '../styles/styles.css';
import 'lazysizes';
import HamburgerMenu from './modules/HamburgerMenu';
import WatchForHover from './modules/WatchForHover';
import RevealOnScroll from './modules/RevealOnScroll';
import RevealOnLoad from './modules/RevealOnLoad';


new HamburgerMenu();
new WatchForHover();
new RevealOnScroll(document.querySelectorAll(".subtitle"), 60);
new RevealOnScroll(document.querySelectorAll(".about-us"), 25);
new RevealOnScroll(document.querySelectorAll(".schedule"), 60);
new RevealOnLoad(document.querySelectorAll(".hero__element"), 1000);

// const els1 = document.querySelectorAll('.hero__element');
// const els2 = document.querySelector('.header');
// const els3 = document.querySelectorAll('.header__reveal');
// els1.forEach(el => {
//     el.classList.add("reveal-item");
//     })    
// els2.classList.add("reveal-item");    
// document.addEventListener('DOMContentLoaded', reveal);
// els3.forEach(el => {
//   el.classList.add("reveal-item");
// })


// function reveal(e) {
//   setTimeout(function() {
//     els1.forEach(el => {
//       el.classList.add('reveal-item--fade-in-up');
//     })
//   }, 1000);
//   setTimeout(function() {
//     els3.forEach(el => {
//       el.classList.add('reveal-item--p-absolute');
//     })
//   }, 1000);
//   setTimeout(function() {
//     els2.classList.add('reveal-item--fade-in-down');
//   }, 1500);
//   setTimeout(function() {
//     els3.forEach(el => {
//       el.classList.add('reveal-item--fade-in-down');
//     })
//   }, 1500);
// }

if (module.hot) {
    module.hot.accept()
};