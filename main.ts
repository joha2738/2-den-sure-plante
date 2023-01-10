let fugt = 0
basic.showIcon(IconNames.Yes)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    fugt = pins.analogReadPin(AnalogPin.P1)
    if (fugt > 400) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
