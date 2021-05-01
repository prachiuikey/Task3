const btn = document.querySelector(".btn")
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")


// GET REQUEST 
// const dt = axios.get("https://crudcrud.com/api/7589cd678a0d418daf1a9327eb2e22ca/RegisteredUser")
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// POST REQUEST
// btn.addEventListener('click', (e)=>{
//     e.defaultPrevented()

//     const dt = axios.post("https://crudcrud.com/api/7589cd678a0d418daf1a9327eb2e22ca/RegisterUser", {
//             "name": nameInput.value,
//             "email": emailInput.value 
//         })
//         .then(res => console.log(res))
// })

// POST REQUEST
const dt = axios.post("https://crudcrud.com/api/7589cd678a0d418daf1a9327eb2e22ca/RegisterUser",{
    "name": "Payal",
    "email": "payal.com"
}).then(data => console.log(data))

