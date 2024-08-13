
let count = 0;
let value = document.getElementById("value");

    function colorChanger() {
        if (count > 0) {
                value.style.color = "rgb(24, 175, 24)";
        } else if (count < 0) {
                value.style.color = "#f15f";
        } else {
                value.style.color = "#cecece";
        }
    }

    document.getElementById("increase").onclick = function() {
        count++;
        value.innerHTML = count;
        colorChanger();
    }

    document.getElementById("decrease").onclick = function() {
        count--;
        value.innerHTML = count;
        colorChanger();
    }

    document.getElementById("reset").onclick = function() {
        count = 0;
        value.innerHTML = count;
        colorChanger();
    }

