import '../styles/styles.css';
import 'lazysizes';
import HamburgerMenu from './modules/HamburgerMenu';

new HamburgerMenu();

if (module.hot) {
    module.hot.accept()
};