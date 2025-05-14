// Product data
const products = [
    {
        id: 1,
        title: "Men's T-Shirt",
        price: 19.99,
        originalPrice: null,
        rating: "★★★★☆",
        reviews: 50,
        description: "A high-quality men's T-shirt.",
        image: "C:/Users/saikiran/sonys homepage/assests/1744104542-232562-mens-450x540.jpg"
    },
    {
        id: 2,
        title: "Sweater",
        price: 29.99,
        originalPrice: null,
        rating: "★★★★★",
        reviews: 100,
        description: "A cozy sweater for men.",
        image: "C:/Users/saikiran/sonys homepage/assests/1744104566-232049-sweater-450x540.jpg"
    },
    {
        id: 3,
        title: "T-Shirt 3",
        price: 14.99,
        originalPrice: null,
        rating: "★★★★☆",
        reviews: 75,
        description: "A comfortable T-shirt.",
        image: "C:/Users/saikiran/sonys homepage/assests/il_600x600.6466422196_3x6z.webp"
    },
    {
        id: 4,
        title: "Classic Tee",
        price: 12.99,
        originalPrice: null,
        rating: "★★★★☆",
        reviews: 60,
        description: "A classic T-shirt design.",
        image: "C:/Users/saikiran/sonys homepage/assests/ssrco,classic_tee,mens_02,4a4440_cc103efb7a,front,product_square,x600.jpg"
    },
    {
        id: 5,
        title: "T-Shirt 5",
        price: 16.99,
        originalPrice: null,
        rating: "★★★★☆",
        reviews: 80,
        description: "A stylish T-shirt.",
        image: "C:/Users/saikiran/sonys homepage/assests/ssrco,classic_tee,mens_02,101010_01c5ca27c6,front,product_square,x600.jpg"
    },
    {
        id: 6,
        title: "T-Shirt 6",
        price: 18.99,
        originalPrice: null,
        rating: "★★★★☆",
        reviews: 90,
        description: "A comfortable T-shirt.",
        image: "C:/Users/saikiran/sonys homepage/assests/ssrco,classic_tee,mens_02,dd2121_8219e99865,front,product_square,x600.u4.jpg"
    },
    {
        id: 7,
        title: "T-Shirt 7",
        price: 20.99,
        originalPrice: null,
        rating: "★★★★☆",
        reviews: 70,
        description: "A premium T-shirt.",
        image: "C:/Users/saikiran/sonys homepage/assests/ssrco,classic_tee,mens_02,fafafa_ca443f4786,front,product_square,x600 (1).jpg"
    },
    {
        id: 8,
        title: "T-Shirt 8",
        price: 22.99,
        originalPrice: null,
        rating: "★★★★☆",
        reviews: 85,
        description: "A stylish T-shirt.",
        image: "C:/Users/saikiran/sonys homepage/assests/ssrco,classic_tee,mens_02,fafafa_ca443f4786,front,product_square,x600.jpg"
    },
    {
        id: 9,
        title: "T-Shirt 9",
        price: 24.99,
        originalPrice: null,
        rating: "★★★★☆",
        reviews: 95,
        description: "A comfortable T-shirt.",
        image: "C:/Users/saikiran/sonys homepage/assests/tshirts.jpg"
    },
    {
        id: 10,
        title: "T-Shirt 10",
        price: 26.99,
        originalPrice: null,
        rating: "★★★★☆",
        reviews: 65,
        description: "A premium T-shirt.",
        image: "C:/Users/saikiran/sonys homepage/assests/master-comics.jpg"
    }
];

// Function to generate product cards
function generateProductCards() {
    const productsGrid = document.getElementById('productsGrid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image" onclick="openQuickView(${product.id})">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                </div>
                <div class="product-rating">
                    <div class="stars">${product.rating}</div>
                    <span class="review-count">(${product.reviews} reviews)</span>
                </div>
                <div class="product-sizes">
                    <span class="size-option">S</span>
                    <span class="size-option selected">M</span>
                    <span class="size-option">L</span>
                    <span class="size-option">XL</span>
                    <span class="size-option">XXL</span>
                </div>
                <div class="product-actions">
                    <button class="quick-view-btn" onclick="openQuickView(${product.id})">Quick View</button>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
        `;

        productsGrid.appendChild(productCard);
    });
}

// Quick View Modal Functions
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        document.getElementById('modalImage').src = product.image;
        document.getElementById('modalTitle').textContent = product.title;
        document.getElementById('modalPrice').textContent = `$${product.price.toFixed(2)}`;
        document.getElementById('modalRating').textContent = product.rating;
        document.getElementById('modalReviews').textContent = `(${product.reviews} reviews)`;
        document.getElementById('modalDescription').textContent = product.description;

        document.getElementById('quickViewModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeQuickView() {
    document.getElementById('quickViewModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('quickViewModal');
    if (event.target === modal) {
        closeQuickView();
    }
}

// Quantity selector
function changeQuantity(change) {
    const quantityInput = document.getElementById('quantity');
    let quantity = parseInt(quantityInput.value);
    quantity += change;
    if (quantity < 1) quantity = 1;
    if (quantity > 10) quantity = 10;
    quantityInput.value = quantity;
}

// Size selection
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('size-option') && !e.target.classList.contains('selected')) {
        const sizeContainer = e.target.parentElement;
        const sizes = sizeContainer.querySelectorAll('.size-option');
        sizes.forEach(size => size.classList.remove('selected'));
        e.target.classList.add('selected');
    }
});

// Add to cart functionality (simplified)
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart') || e.target.id === 'modalAddToCart') {
        let productId;
        if (e.target.id === 'modalAddToCart') {
            productId = e.target.getAttribute('data-product-id');
        } else {
            productId = e.target.closest('.product-card').querySelector('.quick-view-btn').getAttribute('onclick').match(/\d+/)[0];
        }
        const product = products.find(p => p.id === parseInt(productId));
        const size = e.target.closest('.product-card, .modal-details').querySelector('.size-option.selected').textContent;
        const quantity = e.target.closest('.modal-details') ? 
                         parseInt(document.getElementById('quantity').value) : 1;
        
        alert(`Added to cart: ${product.title} (Size: ${size}, Quantity: ${quantity})`);
        closeQuickView();
    }
});

// Generate product cards on page load
generateProductCards();
