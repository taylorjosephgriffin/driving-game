class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
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

let mustang = new Car($mustang, 5, 'east', [0, 0])
mustang.$img.setAttribute('style', 'position: relative')

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

let isRunning = false

document.body.addEventListener('keydown', function (event) {
  const key = event.keyCode
  if (key === 32 && !isRunning) {
    isRunning = true
    mustang.start()
  }
  else if (key === 32 && isRunning) {
    isRunning = false
    mustang.stop()
  }
})
