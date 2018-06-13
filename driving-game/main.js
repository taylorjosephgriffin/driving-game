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
}

const $mustang = document.createElement('img')
$mustang.setAttribute('src', 'images/car1.png')

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
