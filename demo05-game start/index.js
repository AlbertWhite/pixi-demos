var app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight
})

document.body.appendChild(app.view)

var style = new PIXI.TextStyle({
  fontFamily: 'Arial',
  fontSize: 36,
  fill: '#ffffff'
})

var text = []

text[0] = new PIXI.Text('Start', style)
text[1] = new PIXI.Text('开始', style)
text[2] = new PIXI.Text('Commence', style)

for (var i = 0; i < 3; i++) {
  text[i].x = window.innerWidth / 2
  text[i].y = (window.innerHeight / 6) * (i + 1)
  text[i].interactive = true
  text[i].buttonMode = true
  text[i].anchor.set(0.5)
  text[i].on('pointerdown', startGame)
  app.stage.addChild(text[i])
}

function startGame() {
  for (var i = 0; i < 3; i++) {
    app.stage.removeChild(text[i])
  }
  var bg1 = PIXI.Sprite.fromImage('./bg1.png')
  app.stage.addChild(bg1)
}
