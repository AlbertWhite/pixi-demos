var PIXI_VARIABLES = { app: null, animation: null }

PIXI_VARIABLES.app = new PIXI.Application({
  width: 2000,
  height: window.innerHeight
})

document.body.appendChild(PIXI_VARIABLES.app.view)

var bg1 = PIXI.Sprite.fromImage("./bg1.png")
var bg2 = PIXI.Sprite.fromImage("./bg2.png")

bg2.x = 1000

PIXI_VARIABLES.app.stage.addChild(bg1)
PIXI_VARIABLES.app.stage.addChild(bg2)

PIXI.loader.add("./animal.json").load(onAssetsLoaded)

document.addEventListener("keydown", onKeyDown)
document.addEventListener("keyup", onKeyUp)

function onKeyUp(key) {
  if (key.keyCode == 39) {
    PIXI_VARIABLES.animation.stop()
  }
}

function onKeyDown(key) {
  if (key.keyCode == 39) {
    PIXI_VARIABLES.animation.play()
    PIXI_VARIABLES.app.stage.position.x -= 10
    PIXI_VARIABLES.animation.x += 10
  }
}

function onAssetsLoaded() {
  var frames = []

  for (var i = 0; i < 6; i++) {
    frames.push(PIXI.Texture.fromFrame(`animal${i}.png`))
  }

  PIXI_VARIABLES.animation = new PIXI.extras.AnimatedSprite(frames)

  PIXI_VARIABLES.animation.x = 10
  PIXI_VARIABLES.animation.y = PIXI_VARIABLES.app.screen.height / 2
  PIXI_VARIABLES.animation.width = 100
  PIXI_VARIABLES.animation.height = 100

  PIXI_VARIABLES.animation.animationSpeed = 0.3

  PIXI_VARIABLES.app.stage.addChild(PIXI_VARIABLES.animation)
}
