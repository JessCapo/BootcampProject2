const categoryContainer = document.querySelector('.js-category-container')

function loadCategories() {
    fetch('https://my-api.plantnet.org/v2/identify/all?api-key=2b10jjhQC8Otf6gYnhXG0s3Ve')
    .then(data => data.json())
    .then(response => {
        const categories = response.categories;
        

        categoriesContainer.innerHTML = categories
            .map(category => `
                <div class="category-item" data-id="${category.idCategory}">
                    <h2>${category.strCategory}</h2>
                    <img 
                        src="${category.strCategoryThumb}" 
                        alt="${category.strCategory}" />
                    <p>${category.strCategoryDescription}</p>
                </div>
            `)



    });
}