function loadCategories() {
    fetch("https://plants10.p.rapidapi.com/plants/details")
    .then(data => data.json())
    .then(response => {
        const categories = response.categories;
        console.log(categories);



    });
}