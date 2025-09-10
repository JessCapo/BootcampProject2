// event listener
document.addEventListener('DOMContentLoaded', () => {

    const API_BASE_URL = `https://dog.ceo/api/breed/`; // Base URL for dog breeds

    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const resultsContainer = document.getElementById('results-container');

    if (!searchInput || !searchButton || !resultsContainer) { // Added resultsContainer check
        console.error("Error: Could not find search-input, search-button, or results-container element.");
        return;
    }

    async function searchImages() {
        const query = searchInput.value.trim().toLowerCase(); // Get breed and convert to lowercase

        if (!query) {
            alert("Please enter a dog breed name to search.");
            return;
        }

        try {
            // Construct the URL for a specific breed's images
            const response = await fetch(`${API_BASE_URL}${encodeURIComponent(query)}/images`);
            const data = await response.json();

            // The Dog CEO API returns { "message": ["url1", "url2"], "status": "success" }
            if (data.status === "success" && data.message.length > 0) {
                displayImages(data.message); // Pass the array of image URLs
            } else {
                resultsContainer.innerHTML = '<p>No images found for that dog breed. Try another name.</p>';
            }

        } catch (error) {
            console.error("Error fetching images:", error);
            resultsContainer.innerHTML = '<p>Something went wrong. Please try again later.</p>';
        }
    }

    function displayImages(imageUrls) { // Now expects an array of URLs directly
        // Clear previous results
        resultsContainer.innerHTML = '';

        imageUrls.forEach(url => { // Iterate directly over URLs
            const imageElement = document.createElement('img');
            imageElement.src = url;
            imageElement.alt = "Dog Image"; // Generic alt text, or you could try to derive from query
            imageElement.classList.add('dog-image'); // Changed class name
            resultsContainer.appendChild(imageElement);
        });
    }

    // Event listeners
    searchButton.addEventListener('click', searchImages);
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            searchImages();
        }
    });
});




/*// event listener
document.addEventListener('DOMContentLoaded', () => {

    // API key and endpoint
    //const API_Key = "LC4t1GLLQOJT"
    const API_URL = `https://dog.ceo/api/breed/hound/images`; 

    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const resultsContainer = document.getElementById('results-container');

    
    if (!searchInput || !searchButton) {
        console.error("Error: Could not find search-input or search-button element.");
        return; // Exit the function if elements aren't found
    }

    async function searchImages() {
        const query = searchInput.value.trim();

        if (!query) {
            alert("Please enter a plant name to search.");
            return;
        }

        try {
            const response = await fetch(`${API_URL}&q=${encodeURIComponent(query)}`);
            const data = await response.json();

            if (data.results && data.results.length > 0) {
                displayImages(data.results);
            } else {
                resultsContainer.innerHTML = '<p>No images found for that plant. Try another name.</p>';
            }

        } catch (error) {
            console.error("Error fetching images:", error);
            resultsContainer.innerHTML = '<p>Something went wrong. Please try again later.</p>';
        }
    }

    function displayImages(images) {
        // Clear previous results
        resultsContainer.innerHTML = '';

        images.forEach(plant => {
            const imageElement = document.createElement('img');
            imageElement.src = plant.url; 
            imageElement.alt = plant.name;
            imageElement.classList.add('plant-image');
            resultsContainer.appendChild(imageElement);
        });
    }

    // Event listeners
    searchButton.addEventListener('click', searchImages);
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            searchImages();
        }
    });
});











/*const API_KEY = "LfUYO0VUrTKutbnInqhNScVRyyqFEELHDKfHannFhwfLeI3L7b";
const API_URL = `https://api.plant.id/v2/image_search`;

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results-container');

async function searchImages() {
    const query = searchInput.ariaValueMax.trim();

    if (!query) {
        alert("Please enter a plant name to search");
        return;
    }
    //Clear previous results
    resultsContainer.innerHTML = '';

    try{
        const response = await fetch(`${API_URL}&q=${encodeURIComponent(query)}`);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            displayImages(data.results);
        } else {
            resultsContainer.innerHTML = '<p>No images found for that plant. Try another name.</p>';
        }
        } catch (error) {
            console.error("Error fetching images.", error);
            resultsContainer.innerHTML = '<p>Something went wrong. Please try again later.</p>';
        }
    }

    function displayImages(images) {
        images.forEach(plant => {
            const imageElement = document.createElement('img');
        
            imageElement.src = plant.url;
            imageElement.alt = plant.name;
            imageElement.classList.add('plant-image');
            resultsContainer.appendChild(imageElement);
        });
    }

    //Event Listeners
    searchButton.addEventListener('click', searchImages);
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            searchImages();
        }
    });
    */
