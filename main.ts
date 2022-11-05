input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index <= 24; index++) {
        led.plot(index % 5, index / 5)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 4; index++) {
            led.plot(list[count] % 4, list[count] - list[count] % 4)
            basic.pause(200)
            count += 1
        }
        for (let index = 0; index < 4; index++) {
            led.plot(list[count] - list[count] % 4, list[count] % 4)
            basic.pause(200)
            count += 1
        }
        led.plot(4, 4)
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
let y = 0
let x = 0
let list: number[] = []
let count = 0
count = 0
for (let index = 0; index <= 15; index++) {
    list.push(Math.abs(Math.abs(index - 7.5) - 7.5))
}
