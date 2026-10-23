let enteredFunctions;
let currentIndex = 0;

function storage() {
    const stored = sessionStorage.getItem("enteredExpressions");
    if (stored) {
        enteredFunctions = JSON.parse(stored);
    }
    else {
        enteredFunctions = [];
        sessionStorage.setItem("enteredExpressions", JSON.stringify(enteredFunctions));
    }
}

document.getElementById("evaluate").addEventListener("click", function () {
    // step 1
    let input = document.getElementById("entered").value;
    // step 2
    document.getElementById("result").innerText = eval(input);
    // step 3 - add function to array
    enteredFunctions.push(input);
    // step 4 - overwrite session storage
    sessionStorage.setItem("enteredExpressions", JSON.stringify(enteredFunctions));
});



document.getElementById("up").addEventListener("click", function () {
    // find current equation typed in box
    let showingEq = document.getElementById("entered").value;
    // if equation in box is not the same as currentIndex, update currentIndex to the most recent index (enteredFunctions.length)
    if (showingEq !== enteredFunctions[currentIndex]) {
        currentIndex = enteredFunctions.length; //since the last stored one is array.length - 1, the current, unadded one is the full length
    }
    // change index based on arrow
    if (currentIndex > 0) {
        currentIndex--;
    }
    // change equation in box to the one stored at that index
    document.getElementById("entered").value = enteredFunctions[currentIndex];
});

document.getElementById("down").addEventListener("click", function () {
    let showingEq = document.getElementById("entered").value;
    if (showingEq !== enteredFunctions[currentIndex]) {
        currentIndex = enteredFunctions.length;
    }
    else {
        if (currentIndex !== enteredFunctions.length - 1) {
            currentIndex++;
            document.getElementById("entered").value = enteredFunctions[currentIndex];
        }
        else {
            document.getElementById("entered").value = " ";
        }
    }
});

document.getElementById("1").addEventListener("click", function () {
    document.getElementById("entered").value += this.innerText;
});

document.getElementById("2").addEventListener("click", function () {
    document.getElementById("entered").value += this.innerText;
});

document.getElementById("3").addEventListener("click", function () {
    document.getElementById("entered").value += this.innerText;
});

document.getElementById("4").addEventListener("click", function () {
    document.getElementById("entered").value += this.innerText;
});

document.getElementById("5").addEventListener("click", function () {
    document.getElementById("entered").value += this.innerText;
});

document.getElementById("6").addEventListener("click", function () {
    document.getElementById("entered").value += this.innerText;
});

document.getElementById("7").addEventListener("click", function () {
    document.getElementById("entered").value += this.innerText;
});

document.getElementById("8").addEventListener("click", function () {
    document.getElementById("entered").value += this.innerText;
});

document.getElementById("9").addEventListener("click", function () {
    document.getElementById("entered").value += this.innerText;
});

document.getElementById("0").addEventListener("click", function () {
    document.getElementById("entered").value += this.innerText;
});

document.getElementById("plus").addEventListener("click", function () {
    document.getElementById("entered").value += this.innerText;
});

document.getElementById("minus").addEventListener("click", function () {
    document.getElementById("entered").value += this.innerText;
});

document.getElementById("mod").addEventListener("click", function () {
    document.getElementById("entered").value += this.innerText;
});

document.getElementById("pow").addEventListener("click", function () {
    document.getElementById("entered").value += "**";
});

document.getElementById("divide").addEventListener("click", function () {
    document.getElementById("entered").value += this.innerText;
});

document.getElementById("multiply").addEventListener("click", function () {
    document.getElementById("entered").value += "*";
});

document.getElementById("open_par").addEventListener("click", function () {
    document.getElementById("entered").value += this.innerText;
});

document.getElementById("close_par").addEventListener("click", function () {
    document.getElementById("entered").value += this.innerText;
});

document.getElementById("dot").addEventListener("click", function () {
    document.getElementById("entered").value += this.innerText;
});