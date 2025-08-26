    fetch('products.json')
    .then(res => res.json())
    .then(data => {
        const mainContainer = document.getElementById('product-container');
        const relatedContainer = document.getElementById('related-container');

        function renderProduct(product) {
        mainContainer.innerHTML = `
            <div class="ch-product">
            <div class="all-images">
                <div class="main-image">
                <span class="discount">${product.discount}</span>
                <span class="organic"><img src="images/SVG.png" alt="icon" class="icon">Organic</span>
                <img class="main" src="${product.images[0]}" alt="">
                </div>
                <div class="image-gallery">
                ${product.images.map((img, index) => `
                    <img src="${img}" alt="Thumbnail ${index + 1}" class="thumbnail">
                `).join('')}
                </div>
            </div>
            <div class="product-info">
                <h2>${product.title}</h2>
                <div class="rev">
                <div class="stars">
                <i class="fa-solid fa-star colored"></i>
                <i class="fa-solid fa-star colored"></i>
                <i class="fa-solid fa-star colored"></i>
                <i class="fa-solid fa-star "></i>
                <i class="fa-solid fa-star"></i>
                </div>
                <div class="allspan">
                <span class="num3">3.00</span>
                <span class="num2">2</span>
                <span class="vertic">|</span>
                <span class="allnum"><span class="sku">SKU:</span>E7F8G9H0</span>
                </div>
                </div>
                <hr>
                <p class="description">${product.description}</p>
                <div class="prices">
                <span class="new-price">$${product.newPrice}</span>
                <span class="old-price"><del>$${product.oldPrice}</del></span>
                </div>
                <button class="order" onclick="window.open('https://wa.me/your-number', '_blank')">Order on WhatsApp</button>
                <div class="special-offer" >
                <span class="text">Special Offer: </span>
                <span class="num"> 81 </span>
                <span class="num"> 06 </span>
                <span class="num"> 50 </span>
                <span class="col"> : </span>
                <span class="num"> 02 </span>
                <span class="fin-text"> Remains until the end of the offer </span>
                </div>
                <div class="buttons">
                <div class="quantity-container"><span class="decrease">-</span> <span id="quantity">1</span><span class="increase">+</span></div>
                <button class="add"><img src="images/Vector.png" alt="icon" class="icon">  Add to cart </button>
                <button class="buy"><img src="images/Vector.png" alt="icon" class="icon">  Buy Now </button>
                </div>
                <div class="pay-details">
                <div class="payment"> <div class="icon"><i class="fa-regular fa-credit-card"></i></div> <div class="pay"><span class="word">Payment.</span>
                Payment upon receipt of goods, Payment by card in the department, Google Pay,
                Online card, -5% discount in case of payment.</div></div>
                <div class="warranty"> <div class="icon"><i class="fa-solid fa-calendar-check"></i></div> <div class="war"> <span class="word"> Warranty.</span>
                The Consumer Protection Act does not provide for the return of this product of proper quality.</div></div>
                </div>
                <div class="product-actions">
                <button class="action-btn">
                    <i class="fa-regular fa-heart"></i> Add to wishlist
                </button>
                <button class="action-btn">
                    <i class="fa-solid fa-share-nodes"></i> Share this Product
                </button>
                <button class="action-btn">
                    <i class="fa-solid fa-code-compare"></i> Compare
                </button>
                </div>
            </div>
            </div>
        `;
        }
        renderProduct(data[0]);
        data.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.images[0]}" alt="">
            <h4 class="related-title">${product.title}</h4>
            <p class="related-price">$${product.newPrice}</p>
            <span class="discount">${product.discount}</span>
        `;
        card.onclick = () => renderProduct(product);
        relatedContainer.appendChild(card);
        });
        const decreaseBtn = document.querySelector(".decrease");
        const increaseBtn = document.querySelector(".increase");
        const quantityInput = document.getElementById("quantity");
    
        decreaseBtn.addEventListener("click", () => {
        let current = parseInt(quantityInput.innerHTML);
        if (current > 1) quantityInput.innerHTML = current - 1;
        });
    
        increaseBtn.addEventListener("click", () => {
        let current = parseInt(quantityInput.innerHTML);
        quantityInput.innerHTML = current + 1;
        });
    });
