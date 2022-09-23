const generateBtn = document.querySelector(".btn");
const copybtn = document.querySelector(".copy-btn");
const input = document.querySelector("#random-password");
const alertContainer = document.querySelector(".alert-container");
generateBtn.addEventListener("click", () => {
    createPassword(14);
})

copybtn.addEventListener("click", () => {
    copyPassword();
    if(input.value != ""){
        alertContainer.classList.remove("active");
        setTimeout(()=> {
            alertContainer.classList.add("active");
        }, 2000);
    }
    
})

function createPassword(pass_size) {
    const randomPasswordChar = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%^&*()_-+={[}]|\:;\"/'<,>.?/abcdefghijklmnopqrstuvwxyz";
    let password = "";
    for(let i = 0;i<pass_size;i++){
        let random = Math.floor(Math.random()*randomPasswordChar.length);
        password += randomPasswordChar.substring(random, random+1);
    }
    input.value = password;
}

function copyPassword() {
    input.select();
    input.setSelectionRange(0,9999);
    navigator.clipboard.writeText(input.value);
    alertContainer.innerText = input.value+" copied!";
}