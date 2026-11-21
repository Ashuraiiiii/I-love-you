function checkPassword() {
    let password = document.getElementById("password").value;
    if (password==="07/21/26") {
        window.location.href="correct-password.html";
    } else {
        document.getElementById("message").textContent= "Wrong Password!";
    }
}