let deploy = document.querySelector(".lonSideBarre")
let sideBare = document.querySelector(".sideBare")
let home = document.getElementById("placeText1")
let info = document.getElementById("placeText2")
let service = document.getElementById("placeText3")
let contact = document.getElementById("placeText4")


function deploySide(){
    sideBare.classList.toggle("active")
    home.textContent = "Home" 
    info.textContent = "About" 
    service.textContent = "Services" 
    contact.textContent = "Contact" 
}


