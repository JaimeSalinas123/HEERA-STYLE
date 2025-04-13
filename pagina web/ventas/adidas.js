document.addEventListener('DOMContentLoaded', function() {

    const products = [
        { id: 1, name: 'adidas Samba OG en blanco nube y negro', price: 60, image: '../img/adidaszapatos/adidas Samba OG en blanco nube y negro.avif' },
        { id: 2, name: 'adidas Campus Bad Bunny en marrón intenso', price: 86, image: '../img/adidaszapatos/adidas Campus Bad Bunny en marrón intenso.avif' },
        { id: 3, name: 'adidas Yeezy Boost 350 V2 en negro y rojo', price: 137, image: '../img/adidaszapatos/adidas Yeezy Boost 350 V2 en negro y rojo Hombre.avif' },
        { id: 4, name: 'adidas Gazelle Indoor en rosa y violeta', price: 44, image: '../img/adidaszapatos/adidas Gazelle Indoor en rosa y violeta.avif' },
        { id: 5, name: 'adidas Campus 00s Core en negro', price: 60, image: '../img/adidaszapatos/adidas Campus 00s Core en negro.avif' },
        { id: 6, name: 'adidas Campus 00s en gris y blanco', price: 60, image: '../img/adidaszapatos/adidas Campus 00s en gris y blanco.avif' },
        { id: 7, name: 'adidas Yeezy Foam RNR en negro carbono', price: 69, image: '../img/adidaszapatos/adidas Yeezy Foam RNR en negro carbono.avif' },
        { id: 8, name: 'adidas Yeezy Boost 350 V2 Zebra', price: 188, image: '../img/adidaszapatos/adidas Yeezy Boost 350 V2 Zebra.avif' },
        

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