function calculateBMI() {

    var weight = document.getElementById('weight').value;

    var height = document.getElementById('height').value;

    console.log("weight===>", weight)
    console.log("height===>", height)

    var bmi = weight / (height * height);
    var outcome = bmi.toFixed(1);

    var resultText = "";

    if (outcome <= 18.5) {
        resultText = "Underweight";
    } else if (outcome >= 18.5 && outcome < 24.9) {
        resultText = "Normal weight";
    } else if (outcome >= 25 && outcome < 29.9) {
        resultText = "Overweight";
    } else {
        resultText = "Obese";
    }

    document.getElementById('result').innerHTML = "Your BMI is: " + outcome +  " You are: " + resultText;
}
