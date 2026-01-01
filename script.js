const display = document.getElementById('display');

function insert(value) {
    if (display.value === "Erro") display.value = "";
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function invertSignal() {
    if (display.value) {
        display.value = String(eval(display.value) * -1);
    }
}

function percent() {
    if (display.value) {
        display.value = String(eval(display.value) / 100);
    }
}

function calculate() {
    try {
        if (display.value) {
            let result = eval(display.value);

            if (String(result).length > 10) {
                result = result.toPrecision(10);
            }
            display.value = result;
        }
    } catch (error) {
        display.value = "Erro";
    }
}
