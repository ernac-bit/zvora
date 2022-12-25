let i = 0
basic.showString("Ahoj")
neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 0)
basic.forever(function () {
    i = PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm)
    if (i > 20 && i < 50) {
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 0)
    } else {
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 240)
    }
})
