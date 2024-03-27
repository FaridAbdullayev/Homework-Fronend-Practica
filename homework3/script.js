let button = document.getElementById("sumbmit-button")
button.addEventListener("click", function () {
    let input2 = document.getElementById("input2").value
    let input1 = document.getElementById("input1").value+'px'
    let a = document.querySelectorAll("a")
    for (let i = 0; i < a.length; i++) {
        a[i].style.fontSize = input1;
        a[i].style.color = input2
    }
})