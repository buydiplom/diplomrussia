// Year
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year')
  if (yearEl) yearEl.textContent = new Date().getFullYear()
})
// Mobile menu
const btn = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')
btn?.addEventListener('click', () => menu.classList.toggle('open'))
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href')
    if(!id || id === '#') return
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({behavior: 'smooth', block: 'start'})
    menu.classList.remove('open')
  })
})
// Hero image upload preview
const heroInput = document.getElementById('heroImageInput')
const heroPreview = document.getElementById('heroPreview')
heroInput?.addEventListener('change', (e) => {
  const file = e.target.files?.[0]
  if(!file) return
  const reader = new FileReader()
  reader.onload = () => { heroPreview.src = reader.result }
  reader.readAsDataURL(file)
})
// Card image upload previews
document.querySelectorAll('.card').forEach(card => {
  const input = card.querySelector('input[type="file"]')
  const img = card.querySelector('.card-img img')
  input?.addEventListener('change', (e) => {
    const file = e.target.files?.[0]
    if(!file) return
    const reader = new FileReader()
    reader.onload = () => { img.src = reader.result }
    reader.readAsDataURL(file)
  })
})
