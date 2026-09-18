const cartContainer = document.getElementById("cartContainer");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

cartContainer.innerHTML = cart.map(product => `
    <div class='cartStyle'>
        <h2>${product.name}</h2>
        <p>Price: ₹${product.price}</p>
        
        <img 
            src="${product.image}" 
            alt="${product.name}" 
            width="100"
        >
        
    </div>
    `).join('');

