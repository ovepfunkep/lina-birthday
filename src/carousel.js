import Swiper from 'swiper'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const SLIDES = [
  {
    image: `${import.meta.env.BASE_URL}images/lesha.jpg`,
    caption: 'Пусть Лёша всегда радует смешными мордочками',
  },
  {
    image: `${import.meta.env.BASE_URL}images/mountain-group.jpg`,
    caption: 'Пусть приключения никогда не заканчиваются',
  },
  {
    image: `${import.meta.env.BASE_URL}images/gown.jpg`,
    caption: 'Пусть эмоции всегда будут яркими',
  },
  {
    image: `${import.meta.env.BASE_URL}images/beer-throne.jpg`,
    caption: 'Пусть заводы ЭлькаПульки никогда не закроются',
  },
  {
    image: `${import.meta.env.BASE_URL}images/selfie.jpg`,
    caption: 'Пусть друзья всегда будут рядом',
  },
  {
    image: `${import.meta.env.BASE_URL}images/couple.jpg`,
    caption: 'Пусть муж всегда будет любить и ценить',
  },
  {
    image: `${import.meta.env.BASE_URL}images/party-baby.jpg`,
    caption: 'Пусть они всегда будут дарить тебе счастье',
  },
]

export function initCarousel() {
  const container = document.getElementById('gallery-slides')
  if (!container) return null

  container.innerHTML = SLIDES.map(
    (slide) => `
    <div class="swiper-slide gallery-slide">
      <div class="gallery-slide__frame">
        <img class="gallery-slide__img" src="${slide.image}" alt="" loading="lazy" />
      </div>
      <p class="gallery-slide__caption">${slide.caption}</p>
    </div>
  `,
  ).join('')

  const swiperEl = document.querySelector('.gallery-swiper')

  const swiper = new Swiper('.gallery-swiper', {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          swiperEl?.classList.add('visible')
        }
      })
    },
    { threshold: 0.2 },
  )

  if (swiperEl) observer.observe(swiperEl)

  return swiper
}
