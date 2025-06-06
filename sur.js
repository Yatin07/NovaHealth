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
