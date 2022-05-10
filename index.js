//randomColor()

function randomColor() {
  color = Math.ceil(Math.random() * 10) * 100
  document.documentElement.style.setProperty('--hue', color)
  console.log(color)
}

function onScroll() {
  showAltNav()
  showUpButton()
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

function showAltNav() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showUpButton() {
  if (scrollY > 1000) {
    upButton.classList.add('show')
  } else {
    upButton.classList.remove('show')
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
header > p,
#about p`)
