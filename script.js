const board = document.getElementById('board');
const numberOfSquares = 800;
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A5', '#A5FF33', '#57FFA5'];

// Function to generate a random color from the list
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// Create 800 square divs and append them to the board
for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    // Add event listeners for hover effect
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));

    board.appendChild(square);
}

// Set a random color on hover
function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.transition = 'background-color 1s ease-out'; // Transition to fade out
}

// Reset color after hover
function removeColor(element) {
    setTimeout(() => {
        element.style.backgroundColor = '#333'; // Reset to default background
    }, 1000); // Delay of 1 second
}
