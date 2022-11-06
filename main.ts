input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index <= 24; index++) {
        led.plot(index % 5, index / 5)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    for (let index = 0; index <= 15; index++) {
        led.plot(list[index], list[(12 + index) % 16])
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
list = [
0,
1,
2,
3,
4,
4,
4,
4,
4,
3,
2,
1,
0,
0,
0,
0
]
