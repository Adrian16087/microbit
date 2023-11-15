let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    for (let i = 0; i <= 3; i++) {
        strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(500)
        strip.clear()
    }
})
