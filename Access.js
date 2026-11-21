function checkPassword() {
    let password = document.getElementById("password").value;
    if (password==="I LOVE YOU TOL") {
        window.location.href="letter.html";
    } else {
        document.getElementById("message").textContent= "Wrong Password!";
    }
}