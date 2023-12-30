function validateForm(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Basic email validation using a regular expression
    let emailInput = document.getElementById('email');
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
}

async function getRandomQuote() {
    const apiUrl = 'https://api.quotable.io/random';
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        document.getElementById('quote').innerText = data.content;
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}

getRandomQuote();


