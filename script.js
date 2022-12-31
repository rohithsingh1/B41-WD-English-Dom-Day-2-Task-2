let userData={
    firstName: "",
    lastName: "",
    Address: "",
    Country: "",
    State: "",
    pincode:"",
    Gender: "",
    favoriteFood:""
}

let firstNameInput=document.getElementById('first-name')
let lastNameInput=document.getElementById('last-name')
let AddressInput=document.getElementById('address')
let CountryInput=document.getElementById('Country')
let StateInput=document.getElementById('State')
let pincodeInput=document.getElementById('pincode')
let GenderMaleInput=document.getElementById('Male')
let GenderFemaleInput=document.getElementById('Female')
let FoodInput=document.getElementById('Food')
let SubmitButton=document.getElementById('submit')
let HomeTabButton=document.getElementById('v-pills-home-tab')
let TableTabButton=document.getElementById('v-pills-table-tab')
let HomeTab = document.getElementById('v-pills-home')
let TableTab = document.getElementById('v-pills-table')


firstNameInput.addEventListener('input', function(e) {
    let value = e.target.value
    userData = {...userData,firstName:value}
})

lastNameInput.addEventListener('input', function(e) {
    let value = e.target.value
    userData = {...userData,lastName:value}
})

AddressInput.addEventListener('input', function(e) {
    let value = e.target.value
    userData = {...userData,Address:value}
})

CountryInput.addEventListener('input', function(e) {
    let value = e.target.value
    userData = {...userData,Country:value}
})

StateInput.addEventListener('input', function(e) {
    let value = e.target.value
    userData = {...userData,State:value}
})

pincodeInput.addEventListener('input', function(e) {
    let value = e.target.value
    userData = {...userData,pincode:value}
})

GenderMaleInput.addEventListener('input', function(e) {
    let value = e.target.value
    userData = {...userData,Gender:value}
})

GenderFemaleInput.addEventListener('input', function(e) {
    let value = e.target.value
    userData = {...userData,Gender:value}
})

FoodInput.addEventListener('input', function(e) {
    let value = e.target.value
    userData = {...userData,favoriteFood:value}
})



SubmitButton.addEventListener("click", function() {
    HomeTabButton.classList.remove('active')
    TableTabButton.classList.add('active')
    HomeTab.classList.remove('show', 'active')
    TableTab.classList.add('show', 'active')

    let tbodytag=document.getElementsByTagName('tbody')
    let trtag=document.createElement('tr')
    tbodytag[0].appendChild(trtag)

    let tdtag
    tdtag=document.createElement('td')
    //tdtag.setAttribute('data-label', 'firstName')
    tdtag.innerHTML=userData.firstName
    trtag.appendChild(tdtag)

    tdtag=document.createElement('td')
    //tdtag.setAttribute('data-label', 'lastName')
    tdtag.innerHTML=userData.lastName
    trtag.appendChild(tdtag)

    tdtag=document.createElement('td')
    //tdtag.setAttribute('data-label', 'Gender')
    tdtag.innerHTML=userData.Gender
    trtag.appendChild(tdtag)

    tdtag=document.createElement('td')
    //tdtag.setAttribute('data-label', 'Food')
    tdtag.innerHTML=userData.favoriteFood
    trtag.appendChild(tdtag)
    
    tdtag=document.createElement('td')
    //tdtag.setAttribute('data-label', 'Country')
    tdtag.innerHTML=userData.Country
    trtag.appendChild(tdtag)
    
    tdtag=document.createElement('td')
    //tdtag.setAttribute('data-label', 'State')
    tdtag.innerHTML=userData.State
    trtag.appendChild(tdtag)
    
    tdtag=document.createElement('td')
    //tdtag.setAttribute('data-label', 'Pincode')
    tdtag.innerHTML=userData.pincode
    trtag.appendChild(tdtag)

    tdtag=document.createElement('td')
    //tdtag.setAttribute('data-label', 'Address')
    tdtag.innerHTML=userData.Address
    trtag.appendChild(tdtag)
    
    firstNameInput.value=""
    lastNameInput.value=""
    AddressInput.value=""
    CountryInput.value=""
    StateInput.value=""
    pincodeInput.value=""
    GenderMaleInput.checked=false
    GenderFemaleInput.checked=false
    FoodInput.value=""

})
























