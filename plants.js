const API_KEY = "LfUYO0VUrTKutbnInqhNScVRyyqFEELHDKfHannFhwfLeI3L7b";
const API_URL = `https://api.plant.id/v2/image_search?api-key=${LfUYO0VUrTKutbnInqhNScVRyyqFEELHDKfHannFhwfLeI3L7b}`;

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');














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