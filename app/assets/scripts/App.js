import '../styles/styles.css';
import 'lazysizes';
import HamburgerMenu from './modules/HamburgerMenu';

new HamburgerMenu();

let modal;
window.addEventListener("DOMContentLoaded", e => {
    if (typeof modal == "undefined") {
        import(/* webpackChunkName: "modal" */'./modules/Modal').then(x => {
            modal = new x.default();
            setTimeout(() => modal.openTheModal(), 20);
        }).catch(() => console.log("error"));
    } else {
        modal.openTheModal()
    }
})

if (module.hot) {
    module.hot.accept()
};