document.getElementById('weightLossCalculator').addEventListener('submit', function(event){
    event.preventDefault(); // Prevents the form from submitting in the traditional way

    // Retrieve form values
    var age = parseInt(document.getElementById('age').value, 10);
    var weight = parseFloat(document.getElementById('weight').value);
    var weightUnit = document.getElementById('weightUnit').value;
    var heightFeet = parseInt(document.getElementById('heightFeet').value || 0, 10);
    var heightInches = parseInt(document.getElementById('heightInches').value || 0, 10);
    var heightCm = parseInt(document.getElementById('heightCm').value || 0, 10);
    var gender = document.getElementById('gender').value;
    var activityLevel = document.getElementById('activityLevel').value;

    // Call the function to perform calculations
    performCalculations(age, weight, weightUnit, heightFeet, heightInches, heightCm, gender, activityLevel);
});

function performCalculations(age, weight, weightUnit, heightFeet, heightInches, heightCm, gender, activityLevel) {
    var heightMeters;
    if(heightCm > 0) {
        heightMeters = heightCm / 100; // Convert centimeters to meters
    } else {
        heightMeters = (heightFeet * 0.3048) + (heightInches * 0.0254); // Convert feet and inches to meters
        heightCm = heightMeters * 100; // Convert meters to centimeters for BMR calculation
    }

    if(weightUnit === 'lbs') {
        weight = weight * 0.453592; // Convert pounds to kilograms
    }

    var bmi = calculateBMI(weight, heightMeters);
    var bmr = calculateBMR(weight, heightCm, age, gender);
    var hourburn = calculateHourBurn(bmr)

    displayResult("BMI: " + bmi.toFixed(2) + ", BMR: " + bmr.toFixed(2) + ", Calories burned per hour: " + hourburn.toFixed(2));
}
function calculateHourBurn(bmr){
    return bmr / 24
}
function calculateBMI(weight, heightMeters) {
    return weight / (heightMeters * heightMeters);
}

function calculateBMR(weight, heightCm, age, gender) {
    if (gender === 'male') {
        return 1.02 * (88.362 + (13.397 * weight) + (4.799 * heightCm) - (5.677 * age));
    } else {
        return 1.02 * (447.593 + (9.247 * weight) + (3.098 * heightCm) - (4.330 * age));
    }
}

function displayResult(resultText) {
    var resultElement = document.getElementById('resultText');
    resultElement.innerHTML = resultText;
}
