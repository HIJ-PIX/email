/**
 * radio group 152,put your git-hub name on this comment before editing
 * 
 * -------------------------------------------------------------------------------
 * 
 * name: HIJ-PIX(master)       Edict
 * 
 * name:
 * 
 * name:
 * 
 * name:
 * 
 * name:
 * 
 * name:
 * 
 * name:
 * 
 * -------------------------------------------------------------------------------
 * 
 * MAX:7 Edictors
 * 
 * if you see that your name is not in the board, leave immediately!
 * 
 * do not Edict if i did'nt put the word Edict after your name
 */
// group 152,do not add bluetooth,add your Git-Hub name on this comment
// 
// ___________________
// 
// name:
input.onButtonPressed(Button.A, function () {
    control.reset()
})
function skip_Email () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showString("Email skipped")
        basic.clearScreen()
    }
}
function open_message () {
    basic.showLeds(`
        # # # # #
        # # . # #
        # . # . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
}
radio.onReceivedString(function (receivedString) {
    if (last_message != receivedString) {
        while (!(input.buttonIsPressed(Button.B))) {
            last_message = receivedString
            basic.showLeds(`
                # # # # .
                # . . . .
                # # # # .
                # . . . .
                # # # # .
                `)
            skip_Email()
        }
        basic.clearScreen()
        open_message()
        basic.showString(receivedString)
        basic.clearScreen()
        control.reset()
    }
})
let last_message = ""
basic.clearScreen()
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        radio.sendString("Hi,my name is " + control.deviceName())
    }
})
control.inBackground(function () {
    while (true) {
        music.playMelody("D E F D E D F G ", 391)
    }
})
