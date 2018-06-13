const $img = document.createElement('img')
$img.setAttribute('src', 'images/car1.png')

const $gameCont = document.querySelector('.game-container')
$gameCont.appendChild($img)

class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }
}
