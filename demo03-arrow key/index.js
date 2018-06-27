var app = new PIXI.Application({ width: 2000, height: window.innerHeight })

document.body.appendChild(app.view)

var bg1 = PIXI.Sprite.fromImage('./bg1.png')
var bg2 = PIXI.Sprite.fromImage('./bg2.png')

bg2.x = 1000

app.stage.addChild(bg1)
app.stage.addChild(bg2)

var left = keyboard(37)
var right = keyboard(39)

right.press = function() {
  app.stage.position.x = -300
}

function keyboard(keyCode) {
  let key = {}
  key.code = keyCode
  key.isDown = false
  key.isUp = true
  key.press = undefined
  key.release = undefined
  //The `downHandler`
  key.downHandler = event => {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press()
      key.isDown = true
      key.isUp = false
    }
    event.preventDefault()
  }

  //The `upHandler`
  key.upHandler = event => {
    if (event.keyCode === key.code) {
      if (key.isDown && key.release) key.release()
      key.isDown = false
      key.isUp = true
    }
    event.preventDefault()
  }

  //Attach event listeners
  window.addEventListener('keydown', key.downHandler.bind(key), false)
  window.addEventListener('keyup', key.upHandler.bind(key), false)
  return key
}
