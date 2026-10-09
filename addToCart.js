// const cartContainer = document.getElementById("cartContainer");

// const cart = JSON.parse(localStorage.getItem("cart")) || [];

// cart me total item kitne hai
// document.getElementById("count-items").innerText = cart.length;

// cartContainer.innerHTML = cart.map((product, index) => `
//     <div class='cartStyle'>
//         <h2>Brand: ${product.name}</h2>
//         <p>Price: ₹${product.price}</p>
        
//         <img 
//             src="${product.image}" 
//             alt="${product.name}"
//             width="100"
//         >

            // <button onClick="deleteItem(${index})">delete</button>
        
//     </div>
//     `).join('');

// function deleteItem(index) {
//     cart.splice(index, 1);

//     localStorage.setItem('cart', JSON.stringify(cart));

//     location.reload();
// }

    // goBack Button
    // function goBack(e){
    //     window.location.href = 'index.html';
    // }


    const cartContainer = document.getElementById('cartContainer');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartContainer.innerHTML = cart.map((product, index) => `
        <p>brand: ${product.name}</P>
        <p>price: ${product.price}</P>
        <img
        src='${product.image}'
        width='100px'
        >

        <button onclick="deleteItem(${index})">delete</button>
        `).join('');

    function goback(){
        window.location.href = 'index.html'
    }

    document.getElementById('countItems').innerText = cart.length;
    
    // Total price calculate karna
    const total = cart.reduce((sum, product) => {
    return sum + Number(product.price);
    }, 0);

    document.getElementById("totalPrice").textContent = total;

    function deleteItem(index){
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload();
    }

