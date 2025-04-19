document.addEventListener('DOMContentLoaded', function() {

    const products = [
        { id: 1, name: 'Vans Knu Skool en blanco y negr', price: 37, image: '../img/vanszapatos/Vans Knu Skool en blanco y negr.avif' },
        { id: 2, name: 'Vans Old Skool Triple Negro', price: 29, image: '../img/vanszapatos/Vans Old Skool Triple Negro.avif' },
        { id: 3, name: 'Vans Knu Skool Azul marino Blanco', price: 42, image: '../img/vanszapatos/Vans Knu Skool Azul marino Blanco.avif' },
        { id: 4, name: 'Vans Old Skool 36 FM black', price: 160, image: '../img/vanszapatos/Vans Old Skool 36 FM black.avif' },
        { id: 5, name: 'Vans Old Skool LX Sepia Brown Gum', price: 80, image: '../img/vanszapatos/Vans Old Skool LX Sepia Brown Gum.avif' },
        { id: 6, name: 'Vans Super Lowpro Marshmallow', price: 75, image: '../img/vanszapatos/Vans Super Lowpro Marshmallow.avif' },
        { id: 7, name: 'Vans Knu Skool Retro Color Marrón', price: 61, image: '../img/vanszapatos/Vans Knu Skool Retro Color Marrón.avif' },
        { id: 8, name: 'Vans Knu Skool Pig Suede Gris', price: 57, image: '../img/vanszapatos/Vans Knu Skool Pig Suede Gris.avif' },
        { id: 9, name: 'Vans Knu Skool COSTS Black Rose Marble', price: 94, image: '../img/vanszapatos/Vans Knu Skool COSTS Black Rose Marble.avif' },
        { id: 10, name: 'Vans Knu Skool Cordura Black', price: 58, image: '../img/vanszapatos/Vans Knu Skool Cordura Black.avif' },
        { id: 11, name: 'Vans Knu Skool Pesto', price: 62, image: '../img/vanszapatos/Vans Knu Skool Pesto.avif' },
        { id: 12, name: 'Vans Sk8-Hi 38 DX BAPE Line ABC Camuflaje', price: 49, image: '../img/vanszapatos/Vans Sk8-Hi 38 DX BAPE Line ABC Camuflaje.avif' },
        { id: 13, name: 'Vans Sk8-Hi Lona Triple Negro', price: 40, image: '../img/vanszapatos/Vans Sk8-Hi Lona Triple Negro.avif' },
        { id: 14, name: 'Vans Knu Skool Gum Bumper Black', price: 59, image: '../img/vanszapatos/Vans Knu Skool Gum Bumper Black.avif' },
        { id: 15, name: 'Vans Knu Skool Negro Rojo', price: 65, image: '../img/vanszapatos/Vans Knu Skool Negro Rojo.avif' },
        { id: 16, name: 'Vans OG Old Skool LX Gallery Dept. Good Luck', price: 212, image: '../img/vanszapatos/Vans OG Old Skool LX Gallery Dept. Good Luck.avif' },
        { id: 17, name: 'Vans Skate Old Skool Negro Blanco Chicle', price: 93, image: '../img/vanszapatos/Vans Skate Old Skool Negro Blanco Chicle.avif' },
        { id: 18, name: 'Vans Knu Skool Mega Check Negro', price: 50, image: '../img/vanszapatos/Vans Knu Skool Mega Check Negro.avif' },
        { id: 19, name: 'Vans Sk8-Hi WTAPS Bones Negro', price: 60, image: '../img/vanszapatos/Vans Sk8-Hi WTAPS Bones Negro.avif' },
        { id: 20, name: 'Vans Vault Sk8-Mid LX Palm Angels Negro Blanco Beige', price: 60, image: '../img/vanszapatos/Vans Vault Sk8-Mid LX Palm Angels Negro Blanco Beige.avif' },
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