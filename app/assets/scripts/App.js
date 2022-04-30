import '../styles/styles.css';
import 'lazysizes';
import HamburgerMenu from './modules/HamburgerMenu';
import WatchForHover from './modules/WatchForHover';


new HamburgerMenu();
new WatchForHover();

if (module.hot) {
    module.hot.accept()
};