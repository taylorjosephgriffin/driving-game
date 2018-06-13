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
        this.location[1] += this.speed
        break
      case 'south':
        this.location[1] -= this.speed
        break
      case 'east':
        this.location[0] += this.speed
        break
      case 'west':
        this.location[0] -= this.speed
        break
      }
  }
}

const $mustang = document.createElement('img')
$mustang.setAttribute('src', 'images/car1.png')
$mustang.setAttribute('style', 'position: relative')

let mustang = new Car($mustang, 2, 'east', [0, 0])

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
