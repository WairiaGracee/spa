const menu = document.querySelector("#hamburgerMenu")
const nav = document.querySelector("nav")
const readMoreBtn = document.querySelector("#readmoreBtn")
const aboutText = document.querySelector("#aboutText")
const aboutText2 = document.querySelector("#aboutText2")
const bookingForm = document.querySelector("#bookingForm")


menu.addEventListener("click", function(){
    nav.classList.toggle("show")
})

let isExpanded = false
readMoreBtn.addEventListener("click", function(){
    if(isExpanded === false){
        aboutText.textContent = "Welcome to Gee Spa. Welcome to Gee Spa. Welcome to Gee Spa.Welcome to Gee Spa. Welcome to Gee Spa.Welcome to Gee Spa. Welcome to Gee Spa. Welcome to Gee Spa. Welcome to Gee Spa. Welcome to Gee Spa. Welcome to Gee Spa. Welcome to Gee Spa. Welcome to Gee Spa. Welcome to Gee Spa. Welcome to Gee Spa. Welcome to Gee Spa. Welcome to Gee Spa. Welcome to Gee Spa. Welcome to Gee Spa. Welcome to Gee Spa."
        aboutText2.textContent = "Pay First!Pay First! Pay First! Pay First!Pay First! Pay First! Pay First! Pay First!Pay First! Pay First!Pay First! Pay First! Pay First! Pay First! Pay First! Pay First! Pay First! Pay First! Pay First!"
        readMoreBtn.textContent = "Read Less"
        isExpanded = true
    }
    else if (isExpanded === true){
        aboutText.textContent = "Welcome.Welcome.Welcome.Welcome.Welcome"
        aboutText2.textContent = "Paid!Paid!Paid!Paid!Paid!Paid!Paid!Paid!Paid!Paid!Paid!Paid!Paid!Paid!Paid!v"
        readMoreBtn.textContent = "Read More"
    }
    
})

bookingForm.addEventListener("submit",function(event){
    event.preventDefault();

    const firstName= document.querySelector("#firstName").value
    const lastName= document.querySelector("#lastName").value

    console.log(firstName)
    console.log(lastName)

    const popUp = document.querySelector("#popUp")
    const popUpText = document.querySelector("#popUpText")

    popUp.classList.remove("hide")

    if(firstName.length <=2){
        popUpText.textContent = "Please enter a valid name"
    }else{
        popUpText.textContent = "Thank you for contacting us. We'll get back to you soon"
    }
    
})

