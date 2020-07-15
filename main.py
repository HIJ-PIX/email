def on_button_pressed_a():
    control.reset()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_pulsed_p0_low():
    radio.set_transmit_power(2)
pins.on_pulsed(DigitalPin.P0, PulseValue.LOW, on_pulsed_p0_low)

def skip_Email():
    if input.button_is_pressed(Button.AB):
        basic.show_string("Email skipped")
        basic.clear_screen()
def open_message():
    basic.show_leds("""
        # # # # #
        # # . # #
        # . # . #
        # . . . #
        # # # # #
        """)
    basic.show_leds("""
        # # # # #
        # # # # #
        # . . . #
        # . . . #
        # # # # #
        """)
    basic.show_leds("""
        # # # # #
        # . # . #
        # . . . #
        # . . . #
        # # # # #
        """)
    basic.show_leds("""
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        """)

def on_received_string(receivedString):
    global last_message
    if last_message != receivedString:
        while not (input.button_is_pressed(Button.B)):
            last_message = receivedString
            basic.show_leds("""
                # # # # .
                # . . . .
                # # # # .
                # . . . .
                # # # # .
                """)
            skip_Email()
        basic.clear_screen()
        open_message()
        basic.show_string(receivedString)
        basic.clear_screen()
        control.reset()
radio.on_received_string(on_received_string)

def on_pulsed_p0_high():
    radio.set_transmit_power(7)
pins.on_pulsed(DigitalPin.P0, PulseValue.HIGH, on_pulsed_p0_high)

last_message = ""
basic.clear_screen()

def on_forever():
    if input.pin_is_pressed(TouchPin.P0):
        radio.send_string("Hi,my name is " + control.device_name())
basic.forever(on_forever)

def on_in_background():
    while True:
        music.play_melody("D E F D E D F G ", 391)
control.in_background(on_in_background)
