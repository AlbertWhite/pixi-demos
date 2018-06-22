var app = new PIXI.Application()

document.body.appendChild(app.view)

PIXI.loader.add('./animal.json').load(onAssetsLoaded)

function onAssetsLoaded() {
  var frames = []

  for (var i = 0; i < 6; i++) {
    frames.push(PIXI.Texture.fromFrame(`animal${i}.png`))
  }

  var animation = new PIXI.extras.AnimatedSprite(frames)

  animation.x = app.screen.width / 2
  animation.y = app.screen.height / 2
  animation.width = 100
  animation.height = 100

  animation.animationSpeed = 0.5
  animation.play()

  app.stage.addChild(animation)
}
