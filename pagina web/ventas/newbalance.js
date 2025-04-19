document.addEventListener('DOMContentLoaded', function() {

    const products = [
        { id: 1, name: 'New Balance 9060 en gris y negro Castlerock', price: 85, image: '../img/balance/New Balance 9060 en gris y negro Castlerock.avif' },
        { id: 2, name: 'New Balance 530 en plateado blanco y azul marino', price: 53, image: '../img/balance/New Balance 530 en plateado blanco y azul marino.avif' },
        { id: 3, name: 'New Balance 9060 en negro monocromático', price: 135, image: '../img/balance/New Balance 9060 en negro monocromático.avif' },
        { id: 4, name: 'New Balance 9060 en negro y gris hormigón', price: 120, image: '../img/balance/New Balance 9060 en negro y gris hormigón.avif' },
        { id: 5, name: 'New Balance 9060 en gris nube', price: 100, image: '../img/balance/New Balance 9060 en gris nube.avif' },
        { id: 6, name: 'New Balance 1906R en blanco y dorado metálico', price: 74, image: '../img/balance/New Balance 1906R en blanco y dorado metálico.avif' },
        { id: 7, name: 'New Balance 2002R Protection Pack en gris nube', price: 135, image: '../img/balance/New Balance 2002R Protection Pack en gris nube.avif' },
        { id: 8, name: 'New Balance 1000 Lunar New Year Black', price: 80, image: '../img/balance/New Balance 1000 Lunar New Year Black.avif' },
        { id: 9, name: 'New Balance 9060 en blanco sal', price: 101, image: '../img/balance/New Balance 9060 en blanco sal.avif' },
        { id: 10, name: 'New Balance 992 MiUSA Joe Freshgoods Aged Well', price: 194, image: '../img/balance/New Balance 992 MiUSA Joe Freshgoods Aged Well.avif' },
        { id: 11, name: 'New Balance 327 Moonbeam Classic en burdeos', price: 50, image: '../img/balance/New Balance 327 Moonbeam Classic en burdeos.avif' },
        { id: 12, name: 'New Balance 550 en blanco y verde', price: 56, image: '../img/balance/New Balance 550 en blanco y verde.avif' },
        { id: 13, name: 'New Balance 550 en blanco gris', price: 52, image: '../img/balance/New Balance 550 en blanco gris.avif' },
        { id: 14, name: 'New Balance 9060 en blanco monocromático', price: 142, image: '../img/balance/New Balance 9060 en blanco monocromático.avif' },
        { id: 15, name: 'New Balance 1906R en plateado y carmesí', price: 80, image: '../img/balance/New Balance 1906R en plateado y carmesí.avif' },
        { id: 16, name: 'New Balance 327 Moonbeam Outerspace', price: 50, image: '../img/balance/New Balance 327 Moonbeam Outerspace.avif' },
        { id: 17, name: 'New Balance 9060 Dark Olivine', price: 91, image: '../img/balance/New Balance 9060 Dark Olivine.avif' },
        { id: 18, name: 'New Balance 1000 Sea Salt Grey', price: 123, image: '../img/balance/New Balance 1000 Sea Salt Grey.avif' },
        { id: 19, name: 'New Balance 9060 Gorrión de hueso', price: 89, image: '../img/balance/New Balance 9060 Gorrión de hueso.avif' },
        { id: 20, name: 'New Balance 1000 Dark Ice Wine', price: 130, image: '../img/balance/New Balance 1000 Dark Ice Wine.avif' },
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