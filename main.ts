basic.showString("Compass Sender")
radio.setGroup(1)
// In this code we just need to send the value of the compass heading to the other micro:bit and it can do the direction determination
basic.forever(function () {
    radio.sendNumber(input.compassHeading())
    basic.pause(500)
})
