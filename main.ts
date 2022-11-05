let list2: number[];
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.clearScreen()
    for (let index = 0; index < 25; index++) {
        led.plot(index % 5, index / 5)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    basic.clearScreen()
    x = -1
    for (let index2 = 0; index2 < 4; index2++) {
        for (let index22 = 0; index22 < 5; index22++) {
            x += 1
            led.plot(x, y)
            basic.pause(200)
        }
        y += 1
        for (let index23 = 0; index23 < 5; index23++) {
            led.plot(x, y)
            basic.pause(200)
            x += -1
        }
        y += 1
    }
})
let y = 0
let x = 0
for (let index3 = 0; index3 < 16; index3++) {
    list2 : number[] = []
    list2.push(Math.abs(Math.abs(index3 - 7.5) - 7.5))
    console.log(list2)
}
