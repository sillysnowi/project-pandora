namespace SpriteKind {
    export const MISC = SpriteKind.create()
}
namespace NumberValueKind {
    export const StorylineProgression = NumberValueKind.create()
}
let SNOWLOGO = sprites.create(assets.image`snowlogo`, SpriteKind.MISC)
SNOWLOGO.setPosition(80, 60)
music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.InBackground)
color.startFade(color.Black, color.originalPalette, 500)
color.pauseUntilFadeDone()
pause(1000)
color.FadeToBlack.startScreenEffect(500)
color.pauseUntilFadeDone()
color.startFade(color.Black, color.originalPalette, 250)
sprites.destroy(SNOWLOGO)
color.pauseUntilFadeDone()
color.clearFadeEffect()
color.setPalette(
color.originalPalette
)
game.setDialogCursor(assets.image`CURSOR`)
game.setDialogFrame(assets.image`FRAME`)
game.setDialogTextColor(1)
let gameSave = pwsave.create()
gameSave.registerSmallNumber(NumberValueKind.StorylineProgression)
gameSave.setSmallNumber(NumberValueKind.StorylineProgression, 0)
if (game.ask("LOAD SAVE?")) {
    if (pwsave.promptForPassword(gameSave)) {
        game.splash("SUCCESS!")
    } else {
        game.splash("LOAD FAILED.")
    }
}
scene.setBackgroundImage(assets.image`filth`)
music.play(music.createSong(assets.song`creeping`), music.PlaybackMode.LoopingInBackground)
let ACTORSPRITE = sprites.create(assets.image`ACTOR`, SpriteKind.Player)
game.showLongText("Hello!", DialogLayout.Bottom)
game.showLongText("I am The Actor!", DialogLayout.Bottom)
controller.moveSprite(ACTORSPRITE, 100, 100)
