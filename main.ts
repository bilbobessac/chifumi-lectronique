input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(randint(0, 2))
})
let chifumi = 0
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
