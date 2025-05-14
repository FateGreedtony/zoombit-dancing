music.onEvent(MusicEvent.BackgroundMelodyEnded, function () {
    zoombit.brake()
})
music.onEvent(MusicEvent.BackgroundMelodyStarted, function () {
    zoombit.turn(TurnDirection.Left, 60)
    basic.pause(500)
    zoombit.turn(TurnDirection.Right, 60)
    basic.pause(500)
})
input.onButtonPressed(Button.A, function () {
    rekabit.setServoPosition(ServoChannel.S1, 90)
})
input.onButtonPressed(Button.AB, function () {
    music.setVolume(45)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
    rekabit.setServoPosition(ServoChannel.S1, 99)
    basic.pause(500)
    rekabit.setServoPosition(ServoChannel.S1, 132)
    basic.pause(500)
    rekabit.setServoPosition(ServoChannel.S1, 43)
})
input.onButtonPressed(Button.B, function () {
    rekabit.setServoPosition(ServoChannel.S1, 20)
})
basic.forever(function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
})
