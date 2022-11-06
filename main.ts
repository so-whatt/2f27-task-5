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
    for (let index = 0; index <= 24; index++) {
        led.plot(Math.abs(Math.abs(index - 4) - 4), index + 5)
        basic.pause(200)
    }
})
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
