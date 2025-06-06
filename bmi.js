// script.js

function calculateBMI(height, weight) {
    return (weight / ((height / 100) ** 2)).toFixed(2);
}

function generateDietPlan() {
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    
    if (!age || !gender || !height || !weight) {
        alert("Please fill all required fields!");
        return;
    }

    const bmi = calculateBMI(height, weight);
    let bmiCategory = '';
    let dietSuggestion = '';
    
    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
        dietSuggestion = 'Increase your intake of proteins, carbohydrates, and healthy fats.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = 'Normal weight';
        dietSuggestion = 'Maintain a balanced diet with a focus on whole grains, lean proteins, fruits, and vegetables.';
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = 'Overweight';
        dietSuggestion = 'Reduce calorie intake and focus on a diet rich in vegetables, lean proteins, and whole grains.';
    } else {
        bmiCategory = 'Obese';
        dietSuggestion = 'Focus on weight loss through a low-calorie diet rich in fiber, and avoid processed foods.';
    }

    // Get vitamin deficiencies
    const deficiencies = [];
    const deficiencyInputs = document.querySelectorAll('input[name="deficiency"]:checked');
    deficiencyInputs.forEach((input) => {
        deficiencies.push(input.value);
    });

    let deficiencyDiet = '';
    if (deficiencies.includes('Vitamin A')) {
        deficiencyDiet += 'Add more carrots, spinach, and sweet potatoes to your diet for Vitamin A.\n';
    }
    if (deficiencies.includes('Vitamin B12')) {
        deficiencyDiet += 'Include meat, fish, dairy, and fortified cereals for Vitamin B12.\n';
    }
    if (deficiencies.includes('Vitamin C')) {
        deficiencyDiet += 'Eat more citrus fruits, strawberries, and bell peppers for Vitamin C.\n';
    }
    if (deficiencies.includes('Vitamin D')) {
        deficiencyDiet += 'Increase your exposure to sunlight and consume more eggs, fatty fish, and fortified milk for Vitamin D.\n';
    }

    document.getElementById('bmiResult').innerHTML = `Your BMI is <strong>${bmi}</strong> (${bmiCategory}).`;
    document.getElementById('dietPlan').innerHTML = `<strong>Diet Recommendations:</strong><br>${dietSuggestion}<br>${deficiencyDiet}`;
    document.getElementById('result').style.display = 'block';
}



// script.js

function generateSummary() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const goal = document.getElementById('goal').value;
    const exercise = document.getElementById('exercise').value;
    const diet = document.getElementById('diet').value;

    const conditions = [];
    const checkboxes = document.querySelectorAll('input[name="condition"]:checked');
    checkboxes.forEach((checkbox) => {
        conditions.push(checkbox.value);
    });

    let summaryText = `<strong>Name:</strong> ${name}<br>`;
    summaryText += `<strong>Age:</strong> ${age}<br>`;
    summaryText += `<strong>Gender:</strong> ${gender}<br>`;
    summaryText += `<strong>Fitness Goal:</strong> ${goal.replace('_', ' ')}<br>`;
    summaryText += `<strong>Health Conditions:</strong> ${conditions.length ? conditions.join(', ') : 'None'}<br>`;
    summaryText += `<strong>Exercise Frequency:</strong> ${exercise}<br>`;
    summaryText += `<strong>Diet:</strong> ${diet}<br>`;
    
    document.getElementById('summaryText').innerHTML = summaryText;
    document.getElementById('summary').style.display = 'block';
}
