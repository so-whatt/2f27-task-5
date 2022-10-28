let x = 0
input.onButtonPressed(Button.A, function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(200)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    x = 0
    for (let y = 0; y <= 4; y++) {
        for (let index = 0; index < 5; index++) {
            led.plot(x, y)
            basic.pause(200)
            x += 1
        }
        x = 4
        y += 1
        for (let index = 0; index < 5; index++) {
            led.plot(x, y)
            basic.pause(200)
            x += -1
        }
        x = 0
    }
})
