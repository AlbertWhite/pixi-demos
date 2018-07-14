//http://www.thrashermagazine.com/articles/magazine/journey/

var PIXI_VARIABLES = {
  app: null,
  animation: null,
  level: "small",
  language: "",
  TEXTS: [],
  width: 9090
}

const BREAKPOINTS = [3690, 7670, 9010]

PIXI_VARIABLES.app = new PIXI.Application({
  width: PIXI_VARIABLES.width,
  height: window.innerHeight,
  backgroundColor: 0x000000
})

document.body.appendChild(PIXI_VARIABLES.app.view)

const titleTextSprite = new PIXI.Text(
  "Life Journey / 旅途",
  new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 30,
    fill: "#a0a0a0"
  })
)

const startTextCNSprite = new PIXI.Text(
  "中文版本",
  new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 25,
    fill: "#ffffff"
  })
)

const startTextENSprite = new PIXI.Text(
  "English Version",
  new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 25,
    fill: "#ffffff"
  })
)

titleTextSprite.x = window.innerWidth / 2
titleTextSprite.y = window.innerHeight / 6
titleTextSprite.anchor.set(0.5)
PIXI_VARIABLES.app.stage.addChild(titleTextSprite)

startTextCNSprite.x = window.innerWidth / 2
startTextCNSprite.y = window.innerHeight / 2 + 80
startTextCNSprite.interactive = true
startTextCNSprite.buttonMode = true
startTextCNSprite.anchor.set(0.5)
startTextCNSprite.on("pointerdown", () => {
  PIXI_VARIABLES.language = "CN"
})
startTextCNSprite.on("pointerdown", InitApp)
PIXI_VARIABLES.app.stage.addChild(startTextCNSprite)

startTextENSprite.x = window.innerWidth / 2
startTextENSprite.y = window.innerHeight / 2
startTextENSprite.interactive = true
startTextENSprite.buttonMode = true
startTextENSprite.anchor.set(0.5)
startTextENSprite.on("pointerdown", () => {
  PIXI_VARIABLES.language = "EN"
})
startTextENSprite.on("pointerdown", InitApp)
PIXI_VARIABLES.app.stage.addChild(startTextENSprite)

function InitApp(e) {
  PIXI_VARIABLES.app.stage.removeChild(startTextENSprite)
  PIXI_VARIABLES.app.stage.removeChild(startTextCNSprite)
  PIXI_VARIABLES.app.stage.removeChild(titleTextSprite)

  PIXI_VARIABLES.app.renderer.backgroundColor = "0x5a5a5a"

  //Add land
  var graphics = new PIXI.Graphics()
  graphics.beginFill(0x000000)
  graphics.drawRect(
    0,
    PIXI_VARIABLES.app.screen.height - 300,
    PIXI_VARIABLES.width + 2000,
    PIXI_VARIABLES.app.screen.height
  )
  PIXI_VARIABLES.app.stage.addChild(graphics)

  //Add sprite
  PIXI.loader.add("./assets/sprites/small.json").load(onAssetsLoaded)

  //Add Text
  var startText =
    "你将踏上一段伟大的旅程，随着道路到达终点。终点会有奖赏，不过要千万小心，这一路上不知道会有多少危险......"
  var helperText = "点击方向键以继续......"

  PIXI_VARIABLES.TEXTS = [
    "幼时恼人的保护和溺爱会浇灌和扼杀你",
    "懒惰的沙发会吸干你的能量",
    "年轻时思想被套上的枷锁仿佛漫无止境的密林，让人沮丧退缩，而你依然不可放弃",
    "肉欲的轻浮诱惑更似刮骨钢刀",
    "夜夜纵情笙歌与玩世不恭的小鬼随时准备伏击你",
    "当心陷进消费主义的流沙陷阱",
    "留心互联网上废话家呕出的沼泽",
    "空虚的工作和腐败的爱情，都要夺走你的年华，残害你的使命",
    "最后，执着当年之勇的傲慢与固步自封，也会让你功亏一篑",
    "而等到一切都结束之时，赐予你的奖赏，此刻也自然显现",
    "就是这旅程本身，你无悔的生命 (完)"
  ]

  if (PIXI_VARIABLES.language === "EN") {
    startText =
      "Stick with your journey to the end, and I promise there is a reward that awaits you. Be warned, you shall encounter many dangers..."
    helperText = "Use the arrow key to continue..."
    PIXI_VARIABLES.TEXTS = [
      "Too much love and care will try to spoil you",
      "Sofa and video game will take all your energy",
      "Too much burden in mind will make it hard to go head，but you cannot give up",
      "Temptation of porn like a knife",
      "Be aware of hard party and cynicism",
      "Not go inside into the Consumerism",
      "Watch out for the rubbish from the internet",
      "Meaningless job, mariage with gone love will take your rest of life away",
      "When you get old, arrogant can hurt you",
      "When the journey comes to an end, the reward is ready to be shown",
      "It is this journey itself, your unregretful life （end）"
    ]
  }

  //Initialize text and style
  var style = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 25,
    fill: "#ffffff",
    wordWrap: true,
    wordWrapWidth: 440
  })

  var startTextSprite = new PIXI.Text(startText, style)
  startTextSprite.x = 500
  startTextSprite.y = 80
  PIXI_VARIABLES.app.stage.addChild(startTextSprite)

  var helperTextSprite = new PIXI.Text(helperText, style)
  helperTextSprite.x = 500
  helperTextSprite.y = 160
  PIXI_VARIABLES.app.stage.addChild(helperTextSprite)

  if (PIXI_VARIABLES.TEXTS) {
    for (var i = 0; i < PIXI_VARIABLES.TEXTS.length; i++) {
      var textSprite = new PIXI.Text(PIXI_VARIABLES.TEXTS[i], style)
      textSprite.x = (i + 1) * 800 + 800
      textSprite.y = 80
      PIXI_VARIABLES.app.stage.addChild(textSprite)
    }
  }
}

//Register listeners
document.addEventListener("keydown", onKeyDown)
document.addEventListener("keyup", onKeyUp)

//Helper function
function onKeyUp(key) {
  if (key.keyCode == 39) {
    PIXI_VARIABLES.animation.stop()
  }
}

//Helper function, detect sprite change
function onKeyDown(key) {
  console.log("PIXI_VARIABLES.animation.x", PIXI_VARIABLES.animation.x)
  if (PIXI_VARIABLES.animation.x == BREAKPOINTS[0]) {
    PIXI_VARIABLES.level = "medium"
    PIXI_VARIABLES.app.stage.removeChild(PIXI_VARIABLES.animation)
    PIXI.loader.add("./assets/sprites/medium.json").load(onAssetsLoaded)
  } else if (PIXI_VARIABLES.animation.x == BREAKPOINTS[1]) {
    PIXI_VARIABLES.level = "old"
    PIXI_VARIABLES.app.stage.removeChild(PIXI_VARIABLES.animation)
    PIXI.loader.add("./assets/sprites/old.json").load(onAssetsLoaded)
  } else if (PIXI_VARIABLES.animation.x == BREAKPOINTS[2]) {
    PIXI_VARIABLES.app.stage.removeChild(PIXI_VARIABLES.animation)
    var grave = new PIXI.Sprite.fromImage("./assets/sprites/grave.png")
    grave.x = BREAKPOINTS[2] + 640
    grave.y = PIXI_VARIABLES.app.screen.height - 500
    grave.width = 200
    grave.height = 200
    PIXI_VARIABLES.app.stage.addChild(grave)
  }

  if (key.keyCode == 39 && PIXI_VARIABLES.animation.x <= PIXI_VARIABLES.width) {
    PIXI_VARIABLES.animation.play()
    PIXI_VARIABLES.app.stage.position.x -= 20
    PIXI_VARIABLES.animation.x += 20
  }
}

//Load Asset
function onAssetsLoaded() {
  var frames = []
  for (var i = 0; i < 3; i++) {
    frames.push(PIXI.Texture.fromFrame(`${PIXI_VARIABLES.level}${i}.png`))
  }

  PIXI_VARIABLES.animation = new PIXI.extras.AnimatedSprite(frames)

  if (PIXI_VARIABLES.level == "small") {
    PIXI_VARIABLES.animation.x = 10
  } else if (PIXI_VARIABLES.level == "medium") {
    PIXI_VARIABLES.animation.x = BREAKPOINTS[0] + 120
  } else if (PIXI_VARIABLES.level == "old") {
    PIXI_VARIABLES.animation.x = BREAKPOINTS[1] + 120
  }

  PIXI_VARIABLES.animation.y = PIXI_VARIABLES.app.screen.height - 500
  PIXI_VARIABLES.animation.width = 200
  PIXI_VARIABLES.animation.height = 200

  PIXI_VARIABLES.animation.animationSpeed = 0.3

  PIXI_VARIABLES.app.stage.addChild(PIXI_VARIABLES.animation)
}
