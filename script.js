
// ---- 1. singup function ---------
// function signup(e){
//     // page reload stop karne k liye
//         e.preventDefault();

    
//     // 1. इनपुट से नया डेटा निकालें
//         const name = document.getElementById("name").value;
//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;

//     // नया यूजर ऑब्जेक्ट बनाएं
//         const newUser = {
//             name, email, password,
//         }

//     // 2. पहले से सेव किए गए यूजर्स की लिस्ट लाएं (अगर नहीं है तो खाली एरे [] लें)
//         const usersList = JSON.parse(localStorage.getItem('allUsers')) || [];

//     // existingUser ko check karna
//         const existingUser = usersList.find(user => user.email === email)
//         if(existingUser){
//             alert('email already exist');
//             return;
//         }
    
//     // 3. नए यूजर को इस लिस्ट में जोड़ें (Push करें)
//         usersList.push(newUser);

//     // 4. पूरी लिस्ट को वापस LocalStorage में सेव कर दें
//     // (LocalStorage केवल टेक्स्ट समझता है, इसलिए JSON.stringify ज़रूरी है)
//         localStorage.setItem('allUsers', JSON.stringify(usersList))

//         alert('signup successfully');
//         e.target.reset();       // data save hote hi form ko clear krne k liye

// }

    function signup(e){
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const newUser = {name, email, password};

        const usersList = JSON.parse(localStorage.getItem('allUsers')) || [];

        const existingUser = usersList.find(user => user.email === email);
        if(existingUser){
            alert('email already exist');
            return;
        }

        usersList.push(newUser);

        localStorage.setItem('allUsers', JSON.stringify(usersList));

        alert('signup successfully');
        e.target.reset();
    }

    



// ---- 2. login function --------
// function login(e) {
//     e.preventDefault();

//     const email = document.getElementById("loginEmail").value;
//     const password = document.getElementById("loginPassword").value;

//     // 2. पहले से सेव किए गए यूजर्स की लिस्ट लाएं (अगर नहीं है तो खाली एरे [] लें)
//     const usersList = JSON.parse(localStorage.getItem("allUsers")) || [];

//     // यूज़र्स की एक लिस्ट (Array) में से किसी एक खास यूज़र को उसकी ईमेल आईडी के ज़रिए ढूंढने के लिए इस्तेमाल होती है।
//     const user = usersList.find(user => user.email === email);

//     // यह कोड यूज़र के लॉगिन (Login) को वेरिफाई करने के लिए इस्तेमाल होता है।
//     //  यह चेक करता है कि जो ईमेल और पासवर्ड यूज़र ने डाला है, वह सही है या नहीं।
//     if (!user) {
//         alert('wrong email');
//         return;
//     }
//     if(user.password !== password){
//         alert('wrong password');
//         return;
//     }

//     alert('login successfully')

//     // यह लाइन लॉगिन सफल होने के बाद उस यूज़र के डेटा को ब्राउज़र की मेमोरी
//     //  (Local Storage) में हमेशा के लिए सेव करने के लिए इस्तेमाल होती है।
//     localStorage.setItem('loggedInUser', JSON.stringify(user));

//     window.location.href = 'dashboard.html';

// }

    function login(e){
        e.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const usersList = JSON.parse(localStorage.getItem('allUsers')) || [];

        const user = usersList.find(user => user.email === email);
        if(!user){
            alert('wrong email');
            return;
        }
        if(user.password !== password){
            alert('wrong password');
            return;
        }

        alert('login successfully');

        localStorage.setItem('loggedInUser',JSON.stringify(user));

        window.location.href = 'dashboard.html'
        e.target.reset;


    }



// ---- 3. डेटा डिलीट करने का फंक्शन (डिलीट बटन दबने पर चलेगा) ----
// function deleteUser(e) {
//     e.preventDefault();

//     const deleteEmail = document.getElementById('deleteEmail').value;
//     const deletePassword = document.getElementById('deletePassword').value;

//     const usersList = JSON.parse(localStorage.getItem('allUsers')) || [];
    
//     const existUser = usersList.find(user => user.email === deleteEmail);

//     if(!existUser){
//         alert('email not found');
//         document.getElementById('deleteForm').reset();
//         return;
        
//     }if(existUser.password !== deletePassword){
//         alert('password not match');
//         document.getElementById('deleteForm').reset();

//         return;
//     }

//     // मैच होने वाले ईमेल को लिस्ट से हटा दिया
//     const updatedList = usersList.filter(user => user.email !== deleteEmail);

    
//     // नई लिस्ट वापस सेव कर दी
//     localStorage.setItem('allUsers', JSON.stringify(updatedList));
    
//     alert("user deleted");
//     document.getElementById('deleteForm').reset();
// }

    function deleteUser(e){
        e.preventDefault();

        const email = document.getElementById('deleteEmail').value;
        const password = document.getElementById('deletePassword').value;

        const usersList = JSON.parse(localStorage.getItem('allUsers')) || [];

        const userExist = usersList.find(user => user.email === email);
        if(!userExist){
            alert('wrong email');
            return;
        }
        if(userExist.password !== password){
            alert('wrong password');
            return;
        }

        const updatedList = usersList.filter(user => user.email !== email);

        localStorage.setItem('allUsers', JSON.stringify(updatedList));

        alert('user deleted');
        e.target.reset();

    }


// addtocart function
// Function values receive karta hai
// function addToCart(name, price, image) {
    
//     // localStorage mein jo cart pehle se saved hai, usko JavaScript ke andar lana.
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];

//     // Product object ban raha hai
//     const product = {
//         name: name,
//         price: price,
//         image: image
        
//     };

//     // Cart array me product add hota hai
//     cart.push(product);

//     // localStorage me save
//     localStorage.setItem("cart", JSON.stringify(cart));
//     // Kyuki localStorage directly array/object store nahi karta, isliye:
//     // JSON.stringify(cart)  ---ka use hota hai

//     alert("Product cart me add ho gaya");

//     window.location.href = 'addToCart.html';
// }

function addToCart(name, price, image){
     const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = {
        name: name,
        price: price,
        image: image
    }
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('product added successfully');
    window.location.href = 'addToCart.html';
}







