document.getElementById("evaluate").addEventListener("click", function () {
    let input = document.getElementById("entered");
    sessionStorage.setItem("result", eval(input.value));
    document.getElementById("result").innerText = sessionStorage.getItem("result");
});
