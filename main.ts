input.onButtonPressed(Button.A, function () {
    car.change(LedSpriteProperty.X, -1)
    music.playTone(587, music.beat(BeatFraction.Half))
})
input.onButtonPressed(Button.B, function () {
    car.change(LedSpriteProperty.X, 1)
    music.playTone(587, music.beat(BeatFraction.Half))
})
let roadblock1: game.LedSprite = null
let roadblocks = 0
let car: game.LedSprite = null
let Tempo = 500
music.setTempo(80)
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
basic.showIcon(IconNames.House)
basic.pause(100)
basic.showString("GET READY!")
basic.pause(100)
music.playTone(523, music.beat(BeatFraction.Half))
basic.showNumber(3)
basic.pause(100)
music.playTone(523, music.beat(BeatFraction.Half))
basic.showNumber(2)
basic.pause(100)
music.playTone(523, music.beat(BeatFraction.Half))
basic.showNumber(1)
basic.pause(100)
car = game.createSprite(2, 4)
car.set(LedSpriteProperty.Blink, 50)
basic.forever(function () {
    if (game.score() < 6) {
        Tempo = 500
    } else if (game.score() > 5 && game.score() < 11) {
        Tempo = 100
    } else if (game.score() > 10) {
        Tempo = 50
    }
    roadblocks = randint(0, 4)
    roadblock1 = game.createSprite(roadblocks, 0)
    if (roadblock1.get(LedSpriteProperty.Y) != 4) {
        for (let index = 0; index < 4; index++) {
            basic.pause(Tempo)
            roadblock1.change(LedSpriteProperty.Y, 1)
            music.playTone(698, music.beat(BeatFraction.Half))
            music.setVolume(50)
        }
        roadblock1.delete()
        game.addScore(1)
        music.playMelody("G C5 - - - - - - ", 245)
    }
    if (roadblock1.get(LedSpriteProperty.Y) == car.get(LedSpriteProperty.Y) && roadblock1.get(LedSpriteProperty.X) == car.get(LedSpriteProperty.X)) {
        basic.showIcon(IconNames.No)
        basic.pause(100)
        music.setTempo(55)
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Forever)
        game.gameOver()
    }
})
