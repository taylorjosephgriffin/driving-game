class Car {
  constructor($img, speed, direction, location, isRunning) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
    this.isRunning = isRunning
  }
  turn(direction) {
    this.direction = direction
    this.$img.className = direction
  }
  move() {
    switch (this.direction) {
      case 'north':
        this.location[1] -= this.speed
        this.$img.style.top = `${this.location[1]}px`
        this.$img.style.left = `${this.location[0]}px`
        break
      case 'south':
        this.location[1] += this.speed
        this.$img.style.top = `${this.location[1]}px`
        this.$img.style.left = `${this.location[0]}px`
        break
      case 'east':
        this.location[0] += this.speed
        this.$img.style.left = `${this.location[0]}px`
        this.$img.style.top = `${this.location[1]}px`
        break
      case 'west':
        this.location[0] -= this.speed
        this.$img.style.left = `${this.location[0]}px`
        this.$img.style.top = `${this.location[1]}px`
        break
      case 'northeast':
        this.location[0] += this.speed - 1
        this.location[1] -= this.speed - 1
        this.$img.style.left = `${this.location[0]}px`
        this.$img.style.top = `${this.location[1]}px`
        break
      case 'northwest':
        this.location[0] -= this.speed - 1
        this.location[1] -= this.speed - 1
        this.$img.style.left = `${this.location[0]}px`
        this.$img.style.top = `${this.location[1]}px`
        break
      case 'southwest':
        this.location[0] -= this.speed - 1
        this.location[1] += this.speed - 1
        this.$img.style.left = `${this.location[0]}px`
        this.$img.style.top = `${this.location[1]}px`
        break
      case 'southeast':
        this.location[0] += this.speed - 1
        this.location[1] += this.speed - 1
        this.$img.style.left = `${this.location[0]}px`
        this.$img.style.top = `${this.location[1]}px`
        break
      }
  }
  start() {
    const car = this
    this.interval = setInterval(function () {
      car.move()
    }, 16)
  }
  stop() {
    clearInterval(this.interval)
  }
}

const $mustang = document.createElement('img')
$mustang.setAttribute('src', 'images/car1.png')

let mustang = new Car($mustang, 5, 'east', [500, -100], false)
mustang.$img.setAttribute('style', 'position: relative')
mustang.$img.style.top = '-100px'
mustang.$img.style.left = '40%'

$mustang.classList.add(mustang.direction)

const $gameCont = document.querySelector('.game-container')
$gameCont.appendChild($mustang)

document.body.addEventListener('keydown', function (event) {
  const key = event.key
  switch (key) {
    case 'ArrowUp':
      mustang.turn('north')
      break
    case 'ArrowDown':
      mustang.turn('south')
      break
    case 'ArrowLeft':
      mustang.turn('west')
      break
    case 'ArrowRight':
      mustang.turn('east')
      break
  }
})

document.body.addEventListener('keydown', function (event) {
  const key = event.keyCode
  if (key === 32 && !mustang.isRunning) {
    mustang.isRunning = true
    mustang.start()
  }
  else if (key === 32 && mustang.isRunning) {
    mustang.isRunning = false
    mustang.stop()
  }
})

var keysPressed = {}
function steer(event) {
  keysPressed[event.keyCode] = (event.type === 'keydown')
  if (keysPressed[38] && keysPressed[39]) {
    mustang.turn('northeast')
  }
  else if (keysPressed[37] && keysPressed[38]) {
    mustang.turn('northwest')
  }
  else if (keysPressed[40] && keysPressed[37]) {
    mustang.turn('southwest')
  }
  else if (keysPressed[39] && keysPressed[40]) {
    mustang.turn('southeast')
  }
}

document.addEventListener('keydown', steer)
document.addEventListener('keyup', steer)

window.addEventListener('scroll', function (event) {
  window.scrollTo( 0, 0 );
})
