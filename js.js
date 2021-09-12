var sizeElem = document.getElementById("size");
var wieghtElem = document.getElementById("weight");
var bmiElem = document.getElementById("BMI");
var size;
var weight;
function calculateBmi() {
    var bmi = 0;
    size = sizeElem.value;
    weight = wieghtElem.value;
    if ((size == undefined || size <= 0) || (weight == undefined || weight <= 0))
        alert("size or weight error");
    else
        bmi = weight/((size/100) * (size/100));
    bmi = Math.round(bmi * 100) / 100;
    bmiElem.innerHTML = bmi;
}