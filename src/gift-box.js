import confetti from 'canvas-confetti'

const CERT_IMAGE = `${import.meta.env.BASE_URL}images/certificate-origin.jpg`

export function initGiftBox() {
  const box = document.getElementById('gift-box')
  const reveal = document.getElementById('certificate-reveal')
  const hint = document.getElementById('gift-hint')
  if (!box || !reveal) return

  const fireConfetti = () => {
    const colors = ['#5BA4D9', '#E8F4FC', '#E8A87C', '#C45C3E', '#FFFFFF']
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.55 },
      colors,
    })
    setTimeout(() => {
      confetti({
        particleCount: 60,
        spread: 100,
        origin: { y: 0.4, x: 0.3 },
        colors,
      })
      confetti({
        particleCount: 60,
        spread: 100,
        origin: { y: 0.4, x: 0.7 },
        colors,
      })
    }, 250)
  }

  const open = () => {
    if (box.classList.contains('opened')) return

    box.classList.add('opening')
    hint?.classList.add('hidden')

    setTimeout(() => {
      box.classList.add('opened')
      box.classList.add('hidden')
      reveal.hidden = false
      fireConfetti()
      reveal.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 900)
  }

  box.addEventListener('click', open)
  box.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      open()
    }
  })
}

export function initCertificateActions() {
  const saveBtn = document.getElementById('save-certificate')

  saveBtn?.addEventListener('click', async () => {
    saveBtn.disabled = true
    saveBtn.textContent = 'Сохраняем...'

    try {
      const response = await fetch(CERT_IMAGE)
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.download = 'spa-sertifikat-lina.jpg'
      link.href = url
      link.click()
      URL.revokeObjectURL(url)
    } finally {
      saveBtn.disabled = false
      saveBtn.textContent = 'Сохранить сертификат'
    }
  })
}
