const API_KEY = "LfUYO0VUrTKutbnInqhNScVRyyqFEELHDKfHannFhwfLeI3L7b";
const API_URL = `https://api.plant.id/v2/image_search?api-key=${LfUYO0VUrTKutbnInqhNScVRyyqFEELHDKfHannFhwfLeI3L7b}`;

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
        const response = await fetch(`${`https://api.plant.id/v2/image_search?api-key=${LfUYO0VUrTKutbnInqhNScVRyyqFEELHDKfHannFhwfLeI3L7b}`}&q=${encodeURIComponent(query)}`);
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















/* $(document).ready(()=>{
    $("#submit").click(()=>{
        let userInput = $("#search").val()
        //alert(userInput)
        $.ajax({
        url:`https://perenual.com/api/species-care-guide-list?key=sk-OhIh68bd8913791b012262=${userInput}`
    })
        .done((res)=>{
            let plants = res.Search;
            $.each(plants, (i, e)=>{
                let poster = e.Poster
                console.log("poster", poster)
                $("body").append(`<img src="${poster}" alt="plant image"/>`)
            })
            


        })
    })




})

//sk-OhIh68bd8913791b012262
///species-care-guide-list
//'https://perneual.com/api/v2/species-list'