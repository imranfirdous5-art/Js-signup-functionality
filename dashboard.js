// यह लाइन ब्राउज़र की मेमोरी (Local Storage) में से लॉगिन किए हुए यूज़र का डेटा निकालने और
//  उसे वापस एक उपयोग करने लायक जावास्क्रिप्ट ऑब्जेक्ट (Object) में बदलने के लिए उपयोग की जाती है।
// const userLogin = JSON.parse(localStorage.getItem("loggedInUser"));

// if (userLogin) {
//     document.getElementById("greeting").textContent =
//     `${userLogin.email}`;
//     // console.log(userLogin);
       
// }

// ---- logout karne k liye ------
// function logout() {
//     // (removeItem) se loggedInUser wali entry delete karta hai.
//     localStorage.removeItem("loggedInUser");

//     window.location.href = "index.html";
// }

const userLogin = JSON.parse(localStorage.getItem('loggedInUser'));
if(userLogin){
    document.getElementById('greeting').textContent = `${userLogin.email}`;

}

function logout(){
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html'
}

