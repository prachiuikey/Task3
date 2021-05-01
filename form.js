const btn = document.querySelector(".btn")
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")


// GET REQUEST 
const dt = axios.get("https://crudcrud.com/api/7589cd678a0d418daf1a9327eb2e22ca/RegisteredUser")
    .then(res => console.log(res))
    

