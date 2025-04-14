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
        { id: 9, name: 'adidas Campus Light Bad Bunny en marrón tiza', price:65 , image: '../img/adidaszapatos/adidas Campus Light Bad Bunny en marrón tiza.avif' },
        { id: 10, name: 'adidas Yeezy 450 Utility en negro', price:69 , image: '../img/adidaszapatos/adidas Yeezy 450 Utility en negro.avif' },
        { id: 11, name: 'adidas Response CL Bad Bunny Paso Fino', price:82 , image: '../img/adidaszapatos/adidas Response CL Bad Bunny Paso Fino.avif' },
        { id: 12, name: 'adidas Response CL Bad Bunny todo en negro', price:90 , image: '../img/adidaszapatos/adidas Response CL Bad Bunny todo en negro.avif' },
        { id: 13, name: 'adidas Yeezy Boost 350 V2 Zyon', price:95 , image: '../img/adidaszapatos/adidas Yeezy Boost 350 V2 Zyon.avif' },
        { id: 14, name: 'adidas AE 1 Low Nicks Gift', price:53 , image: '../img/adidaszapatos/adidas AE 1 Low Nicks Gift.avif' },
        { id: 15, name: 'adidas Campus 00s Verde oscuro Blanco nube', price:60 , image: '../img/adidaszapatos/adidas Campus 00s Verde oscuro Blanco nube.avif' },
        { id: 16, name: 'adidas Yeezy Boost 350 V2 Core en blanco y negro', price:151  , image: '../img/adidaszapatos/adidas Yeezy Boost 350 V2 Core en blanco y negro.avif' },
        { id: 17, name: 'adidas Harden Vol 8 gris pluma', price:79  , image: '../img/adidaszapatos/adidas Harden Vol 8 gris pluma.avif' },
        { id: 18, name: 'adidas Handball Spezial Arctic Night en rosa claro', price:45  , image: '../img/adidaszapatos/adidas Handball Spezial Arctic Night en rosa claro.avif' },
        { id: 19, name: 'adidas Yeezy 700 V3 Azael', price:100  , image: '../img/adidaszapatos/adidas Yeezy 700 V3 Azael.avif' },
        { id: 20, name: 'adidas Yeezy Boost 700 MNVN Honey Flux', price:58  , image: '../img/adidaszapatos/adidas Yeezy Boost 700 MNVN Honey Flux.avif' },
        { id: 21, name: 'adidas Superstar Blanco Negro', price:58  , image: '../img/adidaszapatos/adidas Superstar Blanco Negro.avif' },
        { id: 22, name: 'adidas Forum Powerphase Bad Bunny Benito', price:58  , image: '../img/adidaszapatos/adidas Forum Powerphase Bad Bunny Benito.avif' },
        { id: 23, name: 'adidas Samba OG en blanco, burdeos y caramelo', price:54  , image: '../img/adidaszapatos/adidas Samba OG en blanco, burdeos y caramelo.avif' },
        { id: 24, name: 'adidas Handball Spezial en verde claro y oscuro brillante', price:48  , image: '../img/adidaszapatos/adidas Handball Spezial en verde claro y oscuro brillante.avif' },
        { id: 25, name: 'adidas Handball Spezial Preloved en verde', price:62  , image: '../img/adidaszapatos/adidas Handball Spezial Preloved en verde.avif' },
        { id: 26, name: 'adidas Yeezy Foam RNR en marrón arcilla', price:54  , image: '../img/adidaszapatos/adidas Yeezy Foam RNR en marrón arcilla.avif' },
        { id: 27, name: 'adidas Samba OG en blanco, azul difuminado y caramelo', price:55  , image: '../img/adidaszapatos/adidas Samba OG en blanco, azul difuminado y caramelo.avif' },
        { id: 25, name: 'adidas Yeezy 700 V3 negro con brillo', price:126  , image: '../img/adidaszapatos/adidas Yeezy 700 V3 negro con brillo.avif' },
        { id: 25, name: 'adidas Forum Buckle Low Bad Bunny Last Forum', price:128  , image: '../img/adidaszapatos/adidas Forum Buckle Low Bad Bunny Last Forum.avif' },
        { id: 25, name: 'adidas Campus 00s en blanco y negro', price:58  , image: '../img/adidaszapatos/adidas Campus 00s en blanco y negro.avif' },
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