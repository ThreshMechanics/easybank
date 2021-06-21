const mobileMenu = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')

mobileMenu.addEventListener('click', () => {
    if(menu.style.display === 'flex') {
        menu.style.display = 'none'
        mobileMenu.src='/images/icon-hamburger.svg'
    } else {
        menu.style.display = 'flex'
        mobileMenu.src='/images/icon-close.svg'
    }
})