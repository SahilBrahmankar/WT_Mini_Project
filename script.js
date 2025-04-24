// Show callback form and hide financial plan form
document.getElementById("callbackBtn").addEventListener("click", function() {
    document.getElementById("callbackForm").style.display = "block";
    document.getElementById("financialPlanForm").style.display = "none";
});

// Show financial plan form and hide callback form
document.getElementById("financialPlanBtn").addEventListener("click", function() {
    document.getElementById("financialPlanForm").style.display = "block";
    document.getElementById("callbackForm").style.display = "none";
});

// Handle callback form submission
document.querySelector("#callbackForm form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting
    alert("Our Advisor Will Get in Touch With You Shortly!"); // Display the pop-up message
    document.getElementById("callbackForm").reset(); // Optional: Reset the form after submission
    document.getElementById("callbackForm").style.display = "none"; // Hide the form after submission
});
document.querySelector("#callbackForm form").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    fetch('http://localhost:5001/api/callback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        alert(result.msg);
    })
    .catch(err => console.error('Error:', err));
});


// Handle financial plan form submission
document.querySelector("#financialPlanForm form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting
    alert("Our Advisor Will Get in Touch With You Shortly!"); // Display the pop-up message
    document.getElementById("financialPlanForm").reset(); // Optional: Reset the form after submission
    document.getElementById("financialPlanForm").style.display = "none"; // Hide the form after submission
});
document.querySelector("#financialPlanForm form").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    fetch('http://localhost:5001/api/create-financial-plan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        alert(result.msg);
    })
    .catch(err => console.error('Error:', err));
});
