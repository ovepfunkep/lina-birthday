export function initParticles() {
  const canvas = document.getElementById('particles')
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  let width = 0
  let height = 0
  let particles = []
  let animationId = 0

  const resize = () => {
    width = window.innerWidth
    height = window.innerHeight
    canvas.width = width * devicePixelRatio
    canvas.height = height * devicePixelRatio
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.scale(devicePixelRatio, devicePixelRatio)

    const count = Math.min(60, Math.floor((width * height) / 18000))
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.4 + 0.1,
      opacity: Math.random() * 0.5 + 0.2,
      drift: (Math.random() - 0.5) * 0.3,
    }))
  }

  const draw = () => {
    ctx.clearRect(0, 0, width, height)

    particles.forEach((p) => {
      p.y -= p.speed
      p.x += p.drift

      if (p.y < -10) {
        p.y = height + 10
        p.x = Math.random() * width
      }

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`
      ctx.fill()
    })

    animationId = requestAnimationFrame(draw)
  }

  resize()
  draw()

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animationId)
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    resize()
    draw()
  })
}
