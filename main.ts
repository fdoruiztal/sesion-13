let temp = 0
input.onButtonPressed(Button.A, function () {
    temp = input.temperature()
    basic.showNumber(temp)
    if (temp >= 33) {
        basic.showString("Lo siento, no es temporada para esquiar.")
        basic.clearScreen()
    } else if (temp >= 24 && temp <= 32) {
        basic.showString("Sólo podrás esquiar en las partes más altas de las montañas.")
        basic.showString("A")
    } else if (temp >= 15 && temp <= 23) {
        basic.showString("¡Toma tus mejores esquís y diviértete!")
        basic.showString("V")
    } else if (temp >= -22 && temp <= 14) {
        basic.showString("Permanece en casa, hay fuertes nevadas.")
        basic.showString("R")
    } else {
    	
    }
})
