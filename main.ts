let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(200)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    x = -1
    y = 0
    for (let index = 0; index < 5; index++) {
        x += 1
        led.plot(x, 0)
        basic.pause(200)
    }
    for (let index = 0; index < 4; index++) {
        y += 1
        led.plot(x, y)
        basic.pause(200)
    }
    for (let index = 0; index < 4; index++) {
        x += -1
        led.plot(x, y)
        basic.pause(200)
    }
    for (let index = 0; index < 4; index++) {
        y += -1
        led.plot(x, y)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    x = -1
    for (let index = 0; index <= 3; index++) {
        for (let index2 = 0; index2 < 5; index2++) {
            x += 1
            led.plot(x, y)
            basic.pause(200)
        }
        y += 1
        for (let index2 = 0; index2 < 5; index2++) {
            led.plot(x, y)
            basic.pause(200)
            x += -1
        }
        y += 1
    }
})
