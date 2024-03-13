function onScroll() {
    if(scrollY > 0){
        navegation.classList.add('scroll')
    }else{
        navegation.classList.remove('scroll')
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
#Services .card`);