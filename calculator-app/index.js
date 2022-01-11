const screen = document.getElementById("screen");
var proccess = 0;
var proc = '';
var isEquals = false;

setScreen(0);

function setNumber(number) {
    if (isEquals) {
        resetScreen
    }
    currValue = getScreen();
    console.log(currValue, currValue + number);
    setScreen(currValue + number);
}

function equals() {
    setProccess(proc);
    setScreen(proccess);
    isEquals = true;
}

function setProccess(val) {
    switch (val) {
        case '+':
            proccess += +getScreen();
            break;
        case '-':
            proccess -= +getScreen();
            break;
        case '*':
            if (proccess === 0) {
                proccess = +getScreen() * 1;
            } else {
                proccess *= +getScreen();
            }

            break;
        case '/':
            if (proccess >= +getScreen()) {
                proccess = proccess / +getScreen();
            }
            if (proccess === 0) {
                proccess = +getScreen();
            }
            break;

        default:
            alert("proccess faild!")
            break;
    }

    proc = val;
    setScreen(0);
}

function getScreen() {
    if (screen.innerHTML.startsWith("0")) {
        const res = screen.innerHTML.substr(1, screen.innerHTML.length);
        return res;
    }
    return screen.innerHTML;
}

function setScreen(value) {
    screen.innerHTML = value;
}

function resetScreen() {
    setScreen(0);
    proccess = 0;
    proc = '';
    isEquals = false;
}
