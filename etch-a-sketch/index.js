const container = document.getElementById("container");
const numberInput = document.getElementById("number-input");
const colorInput = document.getElementById("color-input");
const numberValue = document.getElementById("number-value");
var bgcolor = "black";
var isGrayscale = false;

colorInput.addEventListener("change", () => bgcolor = colorInput.value)

numberInput.addEventListener("change", () => {
    createTable(numberInput.value);
    numberValue.innerHTML = "Size : " + numberInput.value + "x" + numberInput.value;
})

function paint() {
    bgcolor = colorInput.value;
}

function erase() {
    bgcolor = "white";
    isGrayscale = false;
}

function createTable(value) {
    container.innerHTML = "";
    const square = value * value;
    for (let i = 1; i <= square; i++) {
        const item = document.createElement("div");
        container.style.gridTemplateColumns = `repeat(${value}, 1fr)`
        container.style.gridTemplateRows = `repeat(${value}, 1fr)`
        item.setAttribute("id", "item-" + i);
        container.appendChild(item);

        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = bgcolor;
        })
    }
}

createTable(4);