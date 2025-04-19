document.addEventListener('DOMContentLoaded', function() {

    const products = [
        { id: 1, name: 'A Bathing Ape BapeSta KidSuper Green', price: 351, image: '../img/bapestazapatos/A Bathing Ape BapeSta KidSuper Green.avif' },
        { id: 2, name: 'A Bathing Ape BapeSta KidSuper Brown', price: 347, image: '../img/bapestazapatos/A Bathing Ape BapeSta KidSuper Brown.avif' },
        { id: 3, name: 'A Bathing Ape Bape Sta Mule KidSuper Green', price: 323, image: '../img/bapestazapatos/A Bathing Ape Bape Sta Mule KidSuper Green.avif' },
        { id: 4, name: 'A Bathing Ape Bape Sta Mule KidSuper Multi-Color', price: 323, image: '../img/bapestazapatos/A Bathing Ape Bape Sta Mule KidSuper Multi-Color.avif' },
        { id: 5, name: 'A Bathing Ape Bape Sta KidSuper Multi-Color', price: 387, image: '../img/bapestazapatos/A Bathing Ape Bape Sta KidSuper Multi-Color.avif' },
        { id: 6, name: 'A Bathing Ape Bape Sta 1 Pink', price: 230, image: '../img/bapestazapatos/A Bathing Ape Bape Sta 1 Pink.avif' },
        { id: 7, name: 'A Bathing Ape Bape Sta 1 Grey', price: 232, image: '../img/bapestazapatos/A Bathing Ape Bape Sta 1 Grey.avif' },
        { id: 8, name: 'A Bathing Ape Bape Sta 1 Green Grey', price: 238, image: '../img/bapestazapatos/A Bathing Ape Bape Sta 1 Green Grey.avif' },
        { id: 9, name: 'A Bathing Ape Bape Sta 3 White', price: 169, image: '../img/bapestazapatos/A Bathing Ape Bape Sta 3 White.avif' },
        { id: 10, name: 'A Bathing Ape Bape Sta 3 Black', price: 160, image: '../img/bapestazapatos/A Bathing Ape Bape Sta 3 Black.avif' },
        { id: 11, name: 'A Bathing Ape Bape Sta Low 6 White Olive Drab', price: 239, image: '../img/bapestazapatos/A Bathing Ape Bape Sta Low 6 White Olive Drab.avif' },
        { id: 12, name: 'A Bathing Ape Bape Sta Low 6 White Beige', price: 248, image: '../img/bapestazapatos/A Bathing Ape Bape Sta Low 6 White Beige.avif' },
        { id: 13, name: 'A Bathing Ape Bape Sta Icon ABC Camuflaje en rosa', price: 217, image: '../img/bapestazapatos/A Bathing Ape Bape Sta Icon ABC Camuflaje en rosa.avif' },
        { id: 14, name: 'A Bathing Ape BAPE Sta Low Shark Pack Negro', price: 199, image: '../img/bapestazapatos/A Bathing Ape BAPE Sta Low Shark Pack Negro.avif' },
        { id: 15, name: 'A Bathing Ape Bape Sta OS 3 M2 Gray', price: 191, image: '../img/bapestazapatos/A Bathing Ape Bape Sta OS 3 M2 Gray.avif' },
        { id: 16, name: 'A Bathing Ape Bape Sta Low 3 M2 Navy', price: 199, image: '../img/bapestazapatos/A Bathing Ape Bape Sta Low 3 M2 Navy.avif' },
        { id: 17, name: 'A Bathing Ape BAPE Sta 2 Patente Amarillo', price: 208, image: '../img/bapestazapatos/A Bathing Ape BAPE Sta 2 Patente Amarillo.avif' },
        { id: 18, name: 'A Bathing Ape BAPE Sta SSENSE Exclusive Blue Snakeskin', price: 225, image: '../img/bapestazapatos/A Bathing Ape BAPE Sta SSENSE Exclusive Blue Snakeskin.avif' },
        { id: 19, name: 'A Bathing Ape Bape Sta 5 Gold', price: 212, image: '../img/bapestazapatos/A Bathing Ape Bape Sta 5 Gold.avif' },
        { id: 20, name: 'A Bathing Ape Bape Sta Icon Low Navy Blue Patent', price: 205, image: '../img/bapestazapatos/A Bathing Ape Bape Sta Icon Low Navy Blue Patent.avif' },
    ];
    
    const productsContainer = document.getElementById('products-container');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    
    function displayProducts(productsToDisplay) {
        productsContainer.innerHTML = '';
        
        productsToDisplay.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">$${product.price}</p>
                </div>
            `;
            
            productsContainer.appendChild(productCard);
        });
    }
    
    function searchProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        
        if (searchTerm === '') {
            displayProducts(products);
            return;
        }
        
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm)
        );
        
        displayProducts(filteredProducts);
    }
    
    displayProducts(products);

    searchButton.addEventListener('click', searchProducts);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });
});