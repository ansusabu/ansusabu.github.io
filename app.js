document.addEventListener('DOMContentLoaded', function () {
    // Create the table header outside of the displayMealPlan function
    const mealPlanTable = document.getElementById('mealPlanTable');
    const headerRow = mealPlanTable.createTHead().insertRow();
    headerRow.innerHTML = '<th>Day</th><th>Breakfast</th><th>Lunch</th><th>Dinner</th>';

    // Initially open the Meal Plan tab
    openTab('mealPlanTab');

    const generateButton = document.getElementById('generateButton');
    generateButton.addEventListener('click', generateMealPlan);
});

function generateMealPlan() {
    const mealPreferences = document.getElementById('mealPreferences').value;

    // Prepare the data to send to the backend
    const requestData = {
        mealPreferences: mealPreferences,
        // Add more user preferences if needed
    };

    // Make a POST request to the backend
    fetch('http://localhost:5000/generate_meal_plan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Handle the response from the backend
        displayMealPlan(data.meal_plan);
        // Switch to the Meal Plan tab after generating the meal plan
        openTab('mealPlanTab');
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function displayMealPlan(mealPlan) {
    const mealPlanBody = document.getElementById('mealPlanBody');
    mealPlanBody.innerHTML = ''; // Clear existing content

    mealPlan.forEach(item => {
        const row = mealPlanBody.insertRow();
        const cellDay = row.insertCell(0);
        const cellbf = row.insertCell(1);
        const celllunch = row.insertCell(2);
        const celldinner = row.insertCell(3);

        cellDay.innerHTML = item.day;
        cellbf.innerHTML = item.Breakfast;
        celllunch.innerHTML = item.Lunch;
        celldinner.innerHTML = item.Dinner;
    });
}

function openTab(tabName) {
    // Hide all tab content
    const tabs = document.getElementsByClassName('tabContent');
    for (const tab of tabs) {
        tab.style.display = 'none';
    }

    // Deactivate all tab buttons
    const tabButtons = document.getElementsByClassName('tabButton');
    for (const button of tabButtons) {
        button.classList.remove('active');
    }

    // Show the selected tab content
    document.getElementById(tabName).style.display = 'block';

    // Activate the clicked tab button
    const clickedButton = document.querySelector(`.tabButton[data-tab="${tabName}"]`);
    clickedButton.classList.add('active');
}

function createRecipeLink(recipeName) {
    const link = document.createElement('a');
    link.href = '#recipe'; // Link to the Recipe tab using its ID
    link.textContent = recipeName;
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        openRecipeTab(recipeName);
    });

    return link.outerHTML;
}

function openRecipeTab(recipeName) {
    // Show the Recipe tab
    openTab('recipeTab');

    // Update the content in the Recipe tab (replace this with actual recipe content)
    const recipeContent = document.getElementById('recipeContent');
    recipeContent.innerHTML = `Recipe for ${recipeName}`;
}
