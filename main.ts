input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    if (input.compassHeading() == 0) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    }
    if (input.compassHeading() == 90) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # # # .
            `)
    }
    if (input.compassHeading() == 180) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . . # # .
            . . . # .
            . # # # .
            `)
    }
    if (input.compassHeading() == 270) {
        basic.showLeds(`
            . . . . .
            # . # . #
            # . # . #
            # . # . #
            . # . # .
            `)
    }
})
