//your JS code here. If required.
// script.js

// List of bands
const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Function to remove specified words
function removeWords(name) {
    const wordsToRemove = ['a', 'an', 'the'];
    return name
        .toLowerCase()
        .split(' ')
        .filter(word => !wordsToRemove.includes(word))
        .join(' ');
}

// Function to sort bands
function sortBands(bands) {
    return bands.sort((a, b) => {
        const cleanA = removeWords(a);
        const cleanB = removeWords(b);
        return cleanA.localeCompare(cleanB);
    });
}

// Function to render the bands to the list
function renderBands(bands) {
    const ul = document.getElementById('band');
    ul.innerHTML = ''; // Clear any existing items
    bands.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        ul.appendChild(li);
    });
}

// Sort and render the bands
const sortedBands = sortBands(bands);
renderBands(sortedBands);
