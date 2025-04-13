document.addEventListener('DOMContentLoaded', function() {

    const products = [
        { id: 1, name: 'Jordan 1 Retro High Chicago Lost', price: 166, image: '../img/jordanzapatos/jordan1retrohighogchicagolost.avif' },
        { id: 2, name: 'Jordan 4 Retro Black Cat 2020', price: 700, image: '../img/jordanzapatos/jordan4retroblack.avif' },
        { id: 3, name: 'Jordan 5 Retro OG', price: 226, image: '../img/jordanzapatos/Jordan 5 Retro OG.avif' },
        { id: 4, name: 'Jordan 1 Retro High 85 OGBred 2025', price: 248, image: '../img/jordanzapatos/Jordan 1 Retro High 85 OG.avif'},
        { id: 5, name: 'Jordan 1 Retro Low OG SP Travis Scott en verde oliva medio', price: 405, image: '../img/jordanzapatos/Jordan 1 Retro Low OG SP Travis Scott en verde oliva medio.avif' },
        { id: 6, name: 'Jordan 3 Retro Valentines Day Treat Yourself 2025', price: 127, image: '../img/jordanzapatos/Jordan 3 Retro Valentines Day Treat Yourself 2025.avif' },
        { id: 7, name: 'Jordan 1 Low OG Obsidian UNC', price: 95, image: '../img/jordanzapatos/Jordan 1 Low OG obsidian UNC.avif' },
        { id: 8, name: 'Jordan 9 Retro Cool Grey 2025', price: 198, image: '../img/jordanzapatos/Jordan 9 Retro Cool Grey (2025).avif' },
        { id: 9, name: 'Jordan 1 Retro High OG en amarillo taxi', price: 71, image: '../img/jordanzapatos/Jordan 1 Retro High OG en amarillo taxi.avif' },
        { id: 10, name: 'Jordan 4 Retro en dorado metalizado', price: 181, image: '../img/jordanzapatos/Jordan 4 Retro en dorado metalizado.avif' },
        { id: 11, name: 'Jordan 4 Retro SB en verde pino', price: 287, image: '../img/jordanzapatos/Jordan 4 Retro SB en verde pino.avif' },
        { id: 12, name: 'Jordan 4 Retro Military en negro', price: 297, image: '../img/jordanzapatos/Jordan 4 Retro Military en negro.avif' },
        { id: 13, name: 'Jordan 1 Low en blanco y negro panda', price: 65, image: '../img/jordanzapatos/Jordan 1 Low en blanco y negro panda.avif' },
        { id: 14, name: 'Jordan 1 Retro High OG en verde trébol', price: 104, image: '../img/jordanzapatos/Jordan 1 Retro High OG en verde trébol.avif' },
        { id: 15, name: 'Jordan 3 Retro Black cat', price: 106, image: '../img/jordanzapatos/Jordan 3 Retro Black cat.avif' },
        { id: 16, name: 'Jordan 4 Retro A Ma Maniére en mineral violeta', price: 190, image: '../img/jordanzapatos/Jordan 4 Retro A Ma Maniére en mineral violeta.avif' },
        { id: 17, name: 'Jordan 4 Retro Lightning', price: 192, image: '../img/jordanzapatos/Jordan 4 Retro Lightning.avif' },
        { id: 18, name: 'Jordan 1 Low Midnight Navy Neutral Grey', price: 79, image: '../img/jordanzapatos/Jordan 1 Low Midnight Navy Neutral Grey.avif' },
        { id: 19, name: 'Jordan 3 Retro OG Rare Air', price: 209, image: '../img/jordanzapatos/Jordan 3 Retro OG Rare Air.avif' },
        { id: 20, name: 'Jordan 1 Retro Low OG SP Travis Scott Phantom en negro', price: 583, image: '../img/jordanzapatos/Jordan 1 Retro Low OG SP Travis Scott Phantom en negro.avif' },
        { id: 21, name: 'Jordan 11 Retro Playoffs Bred', price: 242, image: '../img/jordanzapatos/Jordan 11 Retro Playoffs Bred.avif' },
        { id: 22, name: 'Jordan 1 Retro High OG en marrón claro', price: 156, image: '../img/jordanzapatos/Jordan 1 Retro High OG en marrón claro.avif' },
        { id: 23, name: 'Jordan 1 Retro Low OG SP Fragment x Travis Scott', price: 1187, image: '../img/jordanzapatos/Jordan 1 Retro Low OG SP Fragment x Travis Scott.avif' },
        { id: 24, name: 'Jordan 1 Retro High OG en rosa decolorado', price: 105, image: '../img/jordanzapatos/Jordan 1 Retro High OG en rosa decolorado.avif' },
        { id: 25, name: 'Jordan 3 Retro SP Nina Chanel Abney Bicoastal', price: 100, image: '../img/jordanzapatos/Jordan 3 Retro SP Nina Chanel Abney Bicoastal.avif' },
        { id: 26, name: 'Jordan 1 Retro High OG en rojo fusión claro', price: 57, image: '../img/jordanzapatos/Jordan 1 Retro High OG en rojo fusión claro.avif' },
        { id: 27, name: 'Jordan 9 Retro Verde oliva', price: 148, image: '../img/jordanzapatos/Jordan 9 Retro Verde oliva.avif' },
        { id: 28, name: 'Jordan 6 Retro Travis Scott British en kaki', price: 182, image: '../img/jordanzapatos/Jordan 6 Retro Travis Scott British en kaki.avif' },
        { id: 29, name: 'Jordan 1 Retro High OG Hand Crafted', price: 100, image: '../img/jordanzapatos/Jordan 1 Retro High OG Hand Crafted.avif' },
        { id: 30, name: 'Jordan 1 Retro High OG en dorado metalizado', price: 58, image: '../img/jordanzapatos/Jordan 1 Retro High OG en dorado metalizado.avif' },
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