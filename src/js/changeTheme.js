const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switcherButton = document.querySelector('.theme-switch__toggle');
const page = document.querySelector('body');

const userTheme = localStorage.getItem('userTheme');
page.classList.add(`${userTheme}`);

if (userTheme === Theme.DARK) {
  switcherButton.checked = true;
}

let userChosenTheme = '';

const changePageTheme = function () {
  if (!switcherButton.checked) {
    userChosenTheme = page.classList.toggle('light-theme');
    userChosenTheme = page.classList.remove('dark-theme');
    localStorage.setItem('userTheme', Theme.LIGHT);
  } else {
    userChosenTheme = page.classList.toggle('dark-theme');
    userChosenTheme = page.classList.remove('light-theme');
    localStorage.setItem('userTheme', Theme.DARK);
    // localStorage.setItem('checkbox', 'switcherButton.checked === true');
  }
};

switcherButton.addEventListener('change', changePageTheme);
