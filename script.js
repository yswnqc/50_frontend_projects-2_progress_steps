const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')
const progressBar = document.querySelector('.progress-bar')
const circles = document.querySelectorAll('.circle')

let currentIndex = 1;

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex > circles.length) {
    currentIndex = circles.length
  }
  update();
})

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 1) {
    currentIndex = 1
  }
  update();
})

const update = () => {
  circles.forEach((circle, index) => {
    if (index < currentIndex) {
      circle.classList.add('delay')
      circle.classList.add('active')
    } else {
      circle.classList.remove('delay')
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')
  progressBar.style.width =
      (actives.length - 1) / (circles.length - 1) * 100 + '%'

  if (currentIndex === 1) {
    prevBtn.disabled = true
  }
  else if (currentIndex === circles.length) {
    nextBtn.disabled = true
  }
  else {
    prevBtn.disabled = false
    nextBtn.disabled = false
  }
}

//这个能有什么improve的地方吗？
