window.addEventListener ('scroll',onScroll)

onScroll()
function onScroll() {
    showNavOnScoll()
    backtotopbuttomonScroll()
}

function showNavOnScoll() {
    if(scrollY > 0){
        navegation.classList.add('scroll')
    }else{
        navegation.classList.remove('scroll')
    }
}

function backtotopbuttomonScroll() {
    if(scrollY > 830){
        backtotopbuttom.classList.add('show')
    }else{
        backtotopbuttom.classList.remove('show')
    } 
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    orige: 'top',
    distance: '30px',
    duration: '700',
}).reveal(`
#home,
#home img,
#home .stats,
#Services header,
#Services .card
#about
#about .header
#about .content`);