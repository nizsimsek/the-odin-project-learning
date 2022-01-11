const btn = document.querySelector("button");
const pass = document.getElementById("password");
const passConfirm = document.getElementById("password-confirm");
const errorSpan = document.getElementById("error");

errorSpan.innerText = " ";

btn.addEventListener("mouseover", ev => {
    if (pass.value != passConfirm.value) {
        passConfirm.setCustomValidity("Şifreler eşleşmiyor.");
        errorSpan.innerText =  "Şifreler Eşleşmiyor";
    } else {
        passConfirm.setCustomValidity("");
    }
})

btn.addEventListener("mouseleave", ev => {
    errorSpan.innerText = "";
})