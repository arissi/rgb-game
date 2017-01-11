var numBoxes = 6;
var colors = [];
var pickedColor;
var boxes = document.querySelectorAll(".colorBox");
var colorDisplay = document.querySelector("#pickedColor");
var messageDisplay = document.querySelector("#message");
var title = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButtons();
    setUpBoxes();    
    reset();
}

resetButton.addEventListener("click", reset);

function setUpModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numBoxes = 3 : numBoxes = 6;
            reset();   
        });
    }
}

function setUpBoxes() {
    for(var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", function(){
            var clickedColor = this.style.background;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                title.style.background = pickedColor;
                changeColors(pickedColor);
                resetButton.textContent = "Play Again?";
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}

function changeColors(color) {
    for (var i = 0; i < boxes.length; i++){
        boxes[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function reset() {
    colors = generateRandomColors(numBoxes);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;   
    title.style.background = "steelblue";
    resetButton.textContent = "New Colors";
    message.textContent = "";
    for (var i = 0; i < boxes.length; i++) {
        if(colors[i]) {
            boxes[i].style.display = "block";
            boxes[i].style.background = colors[i];
        }
        else {
            boxes[i].style.display = "none";
        }
    }
}