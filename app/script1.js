function mult() {
    // Беремо числа з віконець
    let num1 = document.getElementById("first_num").value;
    let num2 = document.getElementById("second_num").value;
    
    // Множимо і показуємо результат
    document.getElementById("result").innerHTML = "Результат: " + (num1 * num2);
}