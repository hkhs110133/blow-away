let 列 = 0
let row = 0
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (input.soundLevel() > 128) {
            row = randint(0, 4)
            列 = randint(0, 4)
        }
        if (led.point(列, row)) {
            led.unplot(列, row)
            led.plot(列 + 1, row)
        }
    }
})
