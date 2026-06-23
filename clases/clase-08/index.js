document.getElementById('year').textContent = new Date().getFullYear()

const menuBtn    = document.getElementById('menu-toggle')
const mobileMenu = document.getElementById('mobile-menu')

menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open')
    menuBtn.classList.toggle('open', isOpen)
    menuBtn.setAttribute('aria-expanded', isOpen)
})

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
    mobileMenu.classList.remove('open')
    menuBtn.classList.remove('open')
    menuBtn.setAttribute('aria-expanded', 'false')
    })
})

document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open')
    menuBtn.classList.remove('open')
    menuBtn.setAttribute('aria-expanded', 'false')
    }
})

/* ── scroll-margin para navbar fijo ── */
document.querySelectorAll('[id]').forEach(el => {
    el.style.scrollMarginTop = 'calc(64px + 1rem)'
})