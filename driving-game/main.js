class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }
  turn(direction) {
    this.$img.className = direction
  }
}

const $mustang = document.createElement('img')
$mustang.setAttribute('src', 'images/car1.png')

let mustang = new Car($mustang, 2, 'east', [0, 0])

$mustang.classList.add(mustang.direction)

const $gameCont = document.querySelector('.game-container')
$gameCont.appendChild($mustang)
