function s () {
    _1 = 0
    basic.clearScreen()
    music.setBuiltInSpeakerEnabled(true)
    servos.P0.setStopOnNeutral(true)
    OLED12864_I2C.init(60)
    OLED12864_I2C.clear()
    OLED12864_I2C.on()
    basic.showLeds(`
        . . # # #
        # . # . #
        . # # # .
        # . # . #
        . . # # #
        `)
    OLED12864_I2C.showString(
    0,
    0,
    "Powered By   Bluetooth",
    1
    )
    music.playMelody("E B C5 A B G A F ", 120)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    OLED12864_I2C.clear()
    OLED12864_I2C.rect(
    0,
    0,
    60,
    30,
    1
    )
    _1 = 1
}
function d () {
    basic.clearScreen()
    basic.showIcon(IconNames.Scissors)
    OLED12864_I2C.clear()
    OLED12864_I2C.showString(
    0,
    0,
    ":( WAIT FOR  IT TO        RESTART",
    1
    )
    basic.pause(10000)
    control.reset()
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (input.soundLevel() == 0) {
    	
    }
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
	
})
let _1 = 0
s()
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        music.setBuiltInSpeakerEnabled(false)
        servos.P0.setStopOnNeutral(false)
        servos.P1.setStopOnNeutral(false)
        servos.P2.setStopOnNeutral(false)
        music.stopAllSounds()
        music.stopAllSounds()
        music.stopMelody(MelodyStopOptions.All)
        music.stopMelody(MelodyStopOptions.All)
        basic.clearScreen()
        basic.clearScreen()
        basic.showLeds(`
            # # # # .
            # . . # .
            # # # # .
            # . . . .
            # . . . .
            `)
    }
})
basic.forever(function () {
    if (_1) {
        if (input.buttonIsPressed(Button.A)) {
            OLED12864_I2C.showString(
            0,
            0,
            "10101010101011110101001010101011010101010101101010101100110101010101010101101101010101101101001010010101100101010101011",
            1
            )
            music.playMelody("C - C - C - C - ", 120)
            d()
        }
    }
})
basic.forever(function () {
    if (input.lightLevel() == 72) {
    	
    }
    if (input.temperature() == 0) {
    	
    }
})
