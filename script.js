
// ---- 1. singup function ---------
function signup(e){
    // page reload stop karne k liye
        e.preventDefault();

    
    // 1. इनपुट से नया डेटा निकालें
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

    // नया यूजर ऑब्जेक्ट बनाएं
        const newUser = {
            name,
            email,
            password,
        }

    // 2. पहले से सेव किए गए यूजर्स की लिस्ट लाएं (अगर नहीं है तो खाली एरे [] लें)
        let usersList = JSON.parse(localStorage.getItem('allUsers')) || [];

    // existingUser ko check karna
        const existingUser = usersList.find(user => user.email === email)
        if(existingUser){
            alert('email already exist');
            return;
        }
    
    // 3. नए यूजर को इस लिस्ट में जोड़ें (Push करें)
        usersList.push(newUser);

    // 4. पूरी लिस्ट को वापस LocalStorage में सेव कर दें
    // (LocalStorage केवल टेक्स्ट समझता है, इसलिए JSON.stringify ज़रूरी है)
        localStorage.setItem('allUsers', JSON.stringify(usersList))

        alert('signup successfully');
        e.target.reset();       // data save hote hi form ko clear krne k liye

}


// ---- 2. login function --------
function login(e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const usersList = JSON.parse(localStorage.getItem("allUsers")) || [];

    const user = usersList.find(
        user => user.email === email && user.password === password
    );

    if (user) {
        alert("Login successful!");
    } else {
        alert("Invalid email or password");
    }
}


// ---- 3. डेटा डिलीट करने का फंक्शन (डिलीट बटन दबने पर चलेगा) ----
function deleteUser(e) {
    e.preventDefault();

    const deleteEmail = document.getElementById('deleteEmail').value;
    

    let usersList = JSON.parse(localStorage.getItem('allUsers')) || [];
    
    // मैच होने वाले ईमेल को लिस्ट से हटा दिया
    usersList = usersList.filter(user => user.email !== deleteEmail);
    
    
    // नई लिस्ट वापस सेव कर दी
    localStorage.setItem('allUsers', JSON.stringify(usersList));
    
    alert("यूजर डिलीट हो गया!");
    document.getElementById('myForm').reset();
}







