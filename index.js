'use strict'

let highScore = 0
let secretNumber = Math.floor(Math.random() * 20) + 1
let score = 20

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)

  if (!guess) {
    displayMessage('⛔️ No number!')
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!')
    document.querySelector('.number').textContent = secretNumber

    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'

    if (score > highScore) {
      highScore = score
      document.querySelector('.highscore').textContent = highScore
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!')
      score--
      document.querySelector('.score').textContent = score
    } else {
      displayMessage('💥 you lost the game!')
      document.querySelector('.score').textContent = 0
    }
  }
})

const againBtn = document.querySelector('.again')

againBtn.addEventListener('click', function () {
  score = 20
  secretNumber = Math.floor(Math.random() * 20) + 1

  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.score').textContent = score
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''

  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
})
