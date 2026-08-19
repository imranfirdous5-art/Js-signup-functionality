const userLogin = JSON.parse(localStorage.getItem("loggedInUser"));


if (userLogin) {
    document.getElementById("greeting").textContent =
    `${userLogin.email}`;
    // console.log(userLogin);
       
}

// ---- logout karne k liye ------
function logout() {
    localStorage.removeItem("loggedInUser");

    window.location.href = "index.html";
}