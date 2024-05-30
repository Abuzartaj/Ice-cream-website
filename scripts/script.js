document.addEventListener('DOMContentLoaded', (event) => {
    // Slideshow functionality
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

    // Handle "buy now" button click
    function buyNow() {
        // Redirect to the checkout page
        redirectToCheckout();
    }

    // Function to handle the form submission
    function handleSubmit(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the form inputs
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        // Get the values from the inputs
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        // Perform form validation
        if (name === '' || email === '') {
            // If any required fields are empty, show an error message
            alert("Please fill out all required fields.");
        } else if (!isValidEmail(email)) {
            // If the email is not in a valid format, show an error message
            alert("Please enter a valid email address.");
        } else {
            // If form validation passes, simulate submission success
            alert("Thank you for your purchase!");

            // Redirect back to the homepage
            window.location.href = "index.html";
        }
    }

    // Function to validate email format
    function isValidEmail(email) {
        // Regular expression to validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Add flavour to cart
    const flavours = document.querySelectorAll('.flavours');
    flavours.forEach(flavour => {
        flavour.addEventListener('click'), () => {
            const flavourName = flavour.querySelector('.text').innerText.split(' - ')[0];
            const price = flavour.querySelector('.text').innerText.split(' - ')[1];

            // Store cart details
            localStorage.setItem('cart', JSON.stringify({ flavour: flavourName, price }));
            alert("Your order has been placed!");
            window.location.href = 'cart.html';

        }
    });
});

// Place order
const placeOrderButton = document.querySelector('.cart-container button');
if (placeOrderButton) {
    placeOrderButton.addEventListener('click', () => {
        alert("Your order has been placed!");
        localStorage.removeItem('cart');
        window.location.href = 'index.html';
    });
}
;
const socialMediaLinks = document.querySelectorAll('li');
socialMediaLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Do something when the social media link is clicked
  });
});


