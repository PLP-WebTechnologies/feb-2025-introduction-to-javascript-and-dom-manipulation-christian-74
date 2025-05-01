// Function to change text content
function changeText() {
    const textElement = document.getElementById('dynamicText');
    const texts = [
        'JavaScript is awesome!',
        'DOM manipulation is fun!',
        'Keep coding!',
        'You\'re doing great!'
    ];
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    textElement.textContent = randomText;
}

// Function to toggle highlight class
function toggleHighlight() {
    const textElement = document.getElementById('styleText');
    textElement.classList.toggle('highlight');
}

// Function to add a new element
function addElement() {
    const container = document.getElementById('elementContainer');
    const newElement = document.createElement('p');
    newElement.textContent = `New element added at: ${new Date().toLocaleTimeString()}`;
    newElement.classList.add('dynamic-element');
    container.appendChild(newElement);
}

// Function to remove the last added element
function removeElement() {
    const container = document.getElementById('elementContainer');
    const elements = container.getElementsByClassName('dynamic-element');
    if (elements.length > 0) {
        container.removeChild(elements[elements.length - 1]);
    }
}