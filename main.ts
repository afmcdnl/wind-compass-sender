radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(input.compassHeading())
    basic.pause(500)
})
