const tableDiv = document.querySelector(".table");
const winnerDiv = document.querySelector(".winner");
const choicesDiv = document.querySelector(".choices");
const errorDiv = document.querySelector(".error");
let player1, player2, tour = player2;

function setTour() {
    if (tour == player1) {
        tour = player2;
    } else {
        tour = player1;
    }
}

createTable(3);

function createTable(value) {
    player1 = "X";
    player2 = "O";
    tour = player2;
    tableDiv.innerHTML = "";
    const square = value * value;
    for (let id = 1; id <= square; id++) {
        const item = document.createElement("button");
        tableDiv.style.gridTemplateColumns = `repeat(${value}, 1fr)`
        tableDiv.style.gridTemplateRows = `repeat(${value}, 1fr)`
        item.setAttribute("id", id);
        item.innerText = id;
        item.style.fontSize = 0;
        tableDiv.appendChild(item);

        item.addEventListener("click", selectedBtn.bind(this, id));
    }
}

function selectedBtn(btnId) {
    const selected = document.getElementById(btnId);
    if (btnId == "iptal") {
        choicesDiv.innerText = "Önce X başlar"
        createTable(3);
    } else if (selected.innerText == btnId) {
        setTour();
        selected.innerText = tour;
        selected.style.fontSize = "100px";
        errorDiv.innerText = "";
        choicesDiv.innerText = "";
        winnerDiv.innerText = "";
    } else {
        errorDiv.innerText = "Dolu kareleri seçemezsiniz.";
    }
    setWinner();
}

function setWinner() {
    const btn1 = document.getElementById("1").innerText;
    const btn2 = document.getElementById("2").innerText;
    const btn3 = document.getElementById("3").innerText;
    const btn4 = document.getElementById("4").innerText;
    const btn5 = document.getElementById("5").innerText;
    const btn6 = document.getElementById("6").innerText;
    const btn7 = document.getElementById("7").innerText;
    const btn8 = document.getElementById("8").innerText;
    const btn9 = document.getElementById("9").innerText;
    if (btn1 == btn2 && btn2 == btn3 && btn1 == btn3) {
        winnerDiv.innerText = "Oyuncu " + tour + " oyunu kazandı. Tablo sıfırlandı";
        selectedBtn("iptal");
    } else if (btn1 == btn4 && btn4 == btn7 && btn1 == btn7) {
        winnerDiv.innerText = "Oyuncu " + tour + " oyunu kazandı. Tablo sıfırlandı";
        selectedBtn("iptal");
    } else if (btn1 == btn5 && btn5 == btn9 && btn1 == btn9) {
        winnerDiv.innerText = "Oyuncu " + tour + " oyunu kazandı. Tablo sıfırlandı";
        selectedBtn("iptal");
    } else if (btn4 == btn5 && btn5 == btn6 && btn4 == btn6) {
        winnerDiv.innerText = "Oyuncu " + tour + " oyunu kazandı. Tablo sıfırlandı";
        selectedBtn("iptal");
    } else if (btn7 == btn8 && btn8 == btn9 && btn7 == btn9) {
        winnerDiv.innerText = "Oyuncu " + tour + " oyunu kazandı. Tablo sıfırlandı";
        selectedBtn("iptal");
    } else if (btn7 == btn5 && btn5 == btn3 && btn7 == btn3) {
        winnerDiv.innerText = "Oyuncu " + tour + " oyunu kazandı. Tablo sıfırlandı";
        selectedBtn("iptal");
    } else if (btn2 == btn5 && btn5 == btn8 && btn2 == btn8) {
        winnerDiv.innerText = "Oyuncu " + tour + " oyunu kazandı. Tablo sıfırlandı";
        selectedBtn("iptal");
    } else if (btn3 == btn6 && btn6 == btn9 && btn3 == btn9) {
        winnerDiv.innerText = "Oyuncu " + tour + " oyunu kazandı. Tablo sıfırlandı";
        selectedBtn("iptal");
    }
}