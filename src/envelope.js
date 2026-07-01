export function initEnvelope() {
  const scene = document.getElementById('envelope-scene')
  const envelope = document.getElementById('envelope')
  const letter = document.getElementById('letter-paper')
  if (!scene || !envelope || !letter) return

  const open = () => {
    if (scene.classList.contains('open')) return
    scene.classList.add('open')
    letter.removeAttribute('aria-hidden')
    envelope.setAttribute('aria-label', 'Письмо открыто')

    setTimeout(() => {
      letter.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, 900)
  }

  envelope.addEventListener('click', open)
  envelope.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      open()
    }
  })
}
