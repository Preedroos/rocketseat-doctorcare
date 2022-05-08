function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  if (!document.body.classList.contains('menu-expanded')) {
    document.body.classList.add('menu-expanded')
  }
}

function closeMenu() {
  if (document.body.classList.contains('menu-expanded')) {
    document.body.classList.remove('menu-expanded')
  }
}

ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 1500
}).reveal(`
.stat,
.card`)

ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 1500
}).reveal(`
#home .button,
#contact .button`)

ScrollReveal({
  origin: 'left',
  distance: '50px',
  duration: 500
}).reveal(`header h1`)

ScrollReveal({
  origin: 'left',
  distance: '50px',
  duration: 1000
}).reveal(`
header h2,
header h3`)

ScrollReveal({
  origin: 'left',
  distance: '50px',
  duration: 1500
}).reveal(`
header p,
#about p`)
