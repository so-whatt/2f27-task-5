def on_button_pressed_a():
    basic.clear_screen()
    for index in range(25):
        led.plot(index % 5, index / 5)
        basic.pause(200)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global x, y
    basic.clear_screen()
    x = -1
    for index2 in range(4):
        for index22 in range(5):
            x += 1
            led.plot(x, y)
            basic.pause(200)
        y += 1
        for index23 in range(5):
            led.plot(x, y)
            basic.pause(200)
            x += -1
        y += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

y = 0
x = 0
for index3 in range(16):
    list2: List[number] = []
    list2.append(abs(abs(index3 - 7.5) - 7.5))
    print(list[index3])