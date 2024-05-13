const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector(".menu__close");
const menuList = document.querySelector(".menu__list");
const menuShadow = document.querySelector(".menu--close");

// menuBtn.addEventListener('click', () => {
//     menuList.classList.add('menu__list--open')
// });
menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("menu__list--open");
    menuShadow.classList.toggle("menu--open");
});

menuClose.addEventListener("click", () => {
    menuList.classList.remove("menu__list--open");
    menuShadow.classList.remove("menu--open");
});

// work button
// document.querySelector('.change-theme').addEventListener('click', function () {
//     const currentTheme = document.body.className;
//     if (currentTheme === 'light-theme') {
//         document.body.className = 'dark-theme';
//     } else {
//         document.body.className = "light-theme";
//     }
// });


// Dont Work
document
  .querySelector('input[type="checkbox"]')
  .addEventListener("click", function () {
    const currentTheme = document.body.className;
    if (currentTheme === "light-theme") {
      document.body.className = "dark-theme";
    } else {
      document.body.className = "light-theme";
    }
  });



// const checkbox = document.querySelector('input[type="checkbox"]');

// перевіряємо, чи була вже встановлена попередня тема
// const savedTheme = localStorage.getItem("theme");
// if (savedTheme) {
//   document.body.classList.add(savedTheme);
//     checkbox.checked = savedTheme === "dark";
    // відмічаємо чекбокс, якщо вибрана темна тема
// }

// checkbox.addEventListener("change", changeTheme);

// функція змін теми
// function changeTheme() {
//   if (checkbox.checked) {
//     document.body.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//   } else {
//     document.body.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//   }
// }
