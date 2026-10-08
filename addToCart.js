// const cartContainer = document.getElementById("cartContainer");

// const cart = JSON.parse(localStorage.getItem("cart")) || [];

// cart me total item kitne hai
// document.getElementById("count-items").innerText = cart.length;

// cartContainer.innerHTML = cart.map(product => `
//     <div class='cartStyle'>
//         <h2>Brand: ${product.name}</h2>
//         <p>Price: ₹${product.price}</p>
        
//         <img 
//             src="${product.image}" 
//             alt="${product.name}"
//             width="100"
//         >
        
//     </div>
//     `).join('');

    // goBack Button
    // function goBack(e){
    //     window.location.href = 'index.html';
    // }


    const cartContainer = document.getElementById('cartContainer');

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartContainer.innerHTML = cart.map((product, index) => `
        <h2>brand: ${product.name}</h2>
        <h2>price: ${product.price}</h2>
        
        <img
        src='${product.image}'
            width='100px'
        >

        <button onclick="deleteItem(${index})">
        Delete
    </button>
        `).join('');

        document.getElementById('count-items').innerText = cart.length;

        function goback(){
            window.location.href = 'index.html';
        }

        // Delete function
function deleteItem(index) {
    cart.splice(index, 1);

    localStorage.setItem('cart', JSON.stringify(cart));

    location.reload();
}
       
