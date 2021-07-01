import menuItems from './menu.json';
import menuItemTmpl from './templates/menu-Item.hbs';

import './sass/main.scss';

const menuList = document.querySelector('.js-menu');

const markUp = menuItemTmpl(menuItems, { ingredients: [] });

menuList.insertAdjacentHTML('afterbegin', markUp);
