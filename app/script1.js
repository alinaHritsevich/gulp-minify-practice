document.getElementById("ageButton").onclick = function() {
    var years = prompt("Скільки вам років?", 17); // поставив 17, як у тебе
    if (years !== null) {
        alert("Вам " + years + " років!");
    }
};