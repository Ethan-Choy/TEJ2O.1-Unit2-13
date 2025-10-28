/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ethan Choy
 * Created on: Sep 2025
 * This program ...
*/

// variables 
let neopixelStrip: neopixel.Strip = null
let counter: number = 0

//cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)


input.onButtonPressed(Button.A, function() {
    // turn on neopixels 
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
while (counter < 4) {
     neopixelStrip.setPixelColor(counter, neopixel.colors(NeoPixelColors.Black)) }
    neopixelStrip.show()
    counter = counter +1
}
})
