const headerMenu = document.querySelector("#headerMenu");
const headerButton = document.querySelector('#headerButton')
const closeButton = document.querySelector('#close')

headerButton.addEventListener('click', () => {
    headerMenu.classList.toggle('header__menu-active')
})

closeButton.addEventListener('click', () => {
    headerMenu.classList.remove('header__menu-active')
})