document.addEventListener('DOMContentLoaded', function() {

    const products = [
        { id: 1, name: 'Nike SB Dunk Low Yuto Horigome Matcha', price: 177, image: '../img/nikezapatos/Nike SB Dunk Low Yuto Horigome Matcha.avif' },
        { id: 2, name: 'Nike Air Max 95 OG Big Bubble Neon', price: 215, image: '../img/nikezapatos/Nike Air Max 95 OG Big Bubble Neon.avif' },
        { id: 3, name: 'Nike Air Force 1 Low 07 en blanco', price: 64, image: '../img/nikezapatos/Nike Air Force 1 Low 07 en blanco.avif' },
        { id: 4, name: 'Nike Dunk Low Retro en blanco y negro panda', price: 55, image: '../img/nikezapatos/Nike Dunk Low Retro en blanco y negro panda.avif' },
        { id: 5, name: 'Nike Kobe 6 Protro Sail All-Star', price: 249, image: '../img/nikezapatos/Nike Kobe 6 Protro Sail All-Star.avif' },
        { id: 6, name: 'Nike Zoom Field Jaxx Travis Scott Light Chocolate', price: 249, image: '../img/nikezapatos/Nike Zoom Field Jaxx Travis Scott Light Chocolate.avif' },
        { id: 7, name: 'Nike Air Force 1 Low Supreme en negro', price: 124, image: '../img/nikezapatos/Nike Air Force 1 Low Supreme en negro.avif' },
        { id: 8, name: 'Nike Dunk Low en gris niebla', price: 58, image: '../img/nikezapatos/Nike Dunk Low en gris niebla.avif' },
        { id: 9, name: 'Nike Air Diamond Turf 2025', price: 127, image: '../img/nikezapatos/Nike Air Diamond Turf 2025.avif' },
        { id: 10, name: 'Nike Kobe 5 Protro Year of the Mamba Eggplant', price: 164, image: '../img/nikezapatos/Nike Kobe 5 Protro Year of the Mamba Eggplant.avif' },
        { id: 11, name: 'Nike SB Dunk Low Pro en caucho blanco', price: 81, image: '../img/nikezapatos/Nike SB Dunk Low Pro en caucho blanco.avif' },
        { id: 12, name: 'Nike Air Force 1 Low Supreme en blanco', price: 123, image: '../img/nikezapatos/Nike Air Force 1 Low Supreme en blanco.avif' },
        { id: 13, name: 'Nike Air Force 1 Low 07 en negro', price: 60, image: '../img/nikezapatos/Nike Air Force 1 Low 07 en negro.avif' },
        { id: 14, name: 'Nike Dunk Low en cacao', price: 55, image: '../img/nikezapatos/Nike Dunk Low en cacao.avif' },
        { id: 15, name: 'Nike Air Max 1 87 SP Supreme Black White', price: 164, image: '../img/nikezapatos/Nike Air Max 1 87 SP Supreme Black White.avif' },
        { id: 16, name: 'Nike SB Dunk Low The Wizard of Oz Poppy Field', price: 118, image: '../img/nikezapatos/Nike SB Dunk Low The Wizard of Oz Poppy Field.avif' },
        { id: 17, name: 'Nike Dunk Low Michigan State', price: 49, image: '../img/nikezapatos/Nike Dunk Low Michigan State.avif' },
        { id: 18, name: 'Nike Dunk Low en rosado', price: 45, image: '../img/nikezapatos/Nike Dunk Low en rosado.avif' },
        { id: 19, name: 'Nike Kobe 8 Protro Lakers Away', price: 133, image: '../img/nikezapatos/Nike Kobe 8 Protro Lakers Away.avif' },
        { id: 20, name: 'Nike Air Foamposite One Black Volt', price: 147, image: '../img/nikezapatos/Nike Air Foamposite One Black Volt.avif' },
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