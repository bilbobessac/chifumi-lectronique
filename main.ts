let chifumi = 0
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(2)
    chifumi = randint(0, 2)
    if (chifumi == 0) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
    if (chifumi == 1) {
        basic.showLeds(`
            . . . # .
            # . # . .
            . # . . .
            # . # . .
            . . . # .
            `)
    }
    if (chifumi == 2) {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
