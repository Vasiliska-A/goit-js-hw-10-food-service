import menuItemTmpl from './templates/menu-Item.hbs';
import menuItems from './menu.json';
import './sass/main.scss';

console.log(menuTmpl(menu));

const menuList = document.querySelector('js-menu');

const menuMarkup = makeMenuMarkUp(menuItems);
menuList.insertAdjacentHTML('beforeend', menuMarkup);

function makeMenuMarkUp(menuItems) {
  console.log(menuItems);
  return menuItemTmpl(menuItems);
}
