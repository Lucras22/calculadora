function insert(num) {
    document.getElementById('display').value += num;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display').value;
    if (display) {
        document.getElementById('display').value = eval(display);
    }
}

function squareRoot() {
    let display = document.getElementById('display').value;
    if (display) {
        document.getElementById('display').value = Math.sqrt(eval(display));
    }
}
