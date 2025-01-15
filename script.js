const compliments = [
    "You're like a software update. Whenever I see you, I think, 'Not now.'",
    "If you were a vegetable, you'd be a cute-cumber!",
    "You're the reason even the sun shines brighter.",
    "You have the perfect face for radio!",
    "You're like a cloud. When you disappear, it's a beautiful day!",
    "You're as sweet as a cupcake with extra frosting!",
    "If you were a fruit, you'd be a fine-apple!",
    "You're like a candle in the wind—bright and slightly wobbly!",
    "You must be made of copper and tellurium because you're Cu-Te!",
    "You're the human version of a participation trophy!"
];

// Function to generate a random compliment
function generateCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const complimentText = compliments[randomIndex];
    const complimentElement = document.getElementById('compliment');

    // Add animation for better visual effect
    complimentElement.style.opacity = 0; // Start with invisible
    setTimeout(() => {
        complimentElement.innerText = complimentText; // Update text
        complimentElement.style.opacity = 1; // Fade back in
    }, 300); // Time for fade-out animation
}

// Attach event listener with button click
document.getElementById('generate-btn').addEventListener('click', generateCompliment);

// Optional: Trigger a compliment on page load for fun
window.addEventListener('load', generateCompliment);
document.addEventListener('mousemove', function (e) {
    // Get the mouse's position relative to the viewport
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // Update the background gradient dynamically based on mouse position
    document.body.style.background = `linear-gradient(to right, rgba(255, 0, 127, ${x}) , rgba(0, 123, 255, ${y}))`;
});
