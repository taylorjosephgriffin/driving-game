const $mustang = document.createElement('img')
$mustang.setAttribute('src', 'images/car1.png')
$mustang.classList.add('east')

const $gameCont = document.querySelector('.game-container')
$gameCont.appendChild($mustang)

class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }
}

let mustang = new Car($mustang, 2, 'east', [0, 0])
