function Jaune () {
    pins.digitalWritePin(DigitalPin.P1, 1)
}
function Rouge () {
    pins.digitalWritePin(DigitalPin.P2, 1)
}
input.onButtonPressed(Button.A, function () {
    pieton = 1
})
function non_pieton () {
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function Pieton () {
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P0, 1)
}
let pieton = 0
pieton = 0
basic.forever(function () {
    while (pieton == 0) {
        vert()
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        Jaune()
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        Rouge()
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
