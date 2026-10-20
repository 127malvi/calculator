const enteredFunctions = {};

document.getElementById("evaluate").addEventListener("click", function () {
    let input = document.getElementById("entered");
    enteredFunctions[input.id] = input.value;
    sessionStorage.setItem("result", eval(input.value));
    document.getElementById("result").innerText = sessionStorage.getItem("result");
});

document.getElementById("up").addEventListener("click", function () {
    let input =  document.getElementsById("entered").value;
    if (input != null) {
        document.getElementById("entered").value = enteredFunctions[input.id - 1];
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
    document.getElementById("entered").value += this.innerText;
});

document.getElementById("divide").addEventListener("click", function () {
    document.getElementById("entered").value += this.innerText;
});

document.getElementById("multiply").addEventListener("click", function () {
    document.getElementById("entered").value += this.innerText;
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