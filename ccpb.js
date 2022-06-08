'use strict'

let frontPageEl = document.getElementById("frontPage")

let myformEl = document.getElementById('myform')

let nameEl = document.getElementById("fnameinput");
let fnameEl = document.getElementById('firstNameError')


let secondnameEl = document.getElementById("sname")
let snameEl = document.getElementById('secondNameError')

function registerPage() {
    let divEl = document.createElement("div")
    divEl.classList.add('bg-container')
    document.body.appendChild(divEl)

    let headingEl = document.createElement("h1")
    headingEl.classList.add("heading")
    headingEl.textContent = "Fast Food Center"
    divEl.appendChild(headingEl)


    let paragraghEl = document.createElement('p')
    paragraghEl.classList.add('description')
    paragraghEl.textContent = "Varieties of GOBI,NOODLES,RICE items"
    headingEl.appendChild(paragraghEl)

    let formEl = document.createElement('form')
    formEl.id = 'myform'
    formEl.classList.add('form')
    divEl.appendChild(formEl)


    let labelContainer = document.createElement('div')
    labelContainer.classList.add('label-container')
    formEl.appendChild(labelContainer)

    let labelEl = document.createElement('label')
    labelEl.textContent = "First_Name:"
    labelEl.id = 'first_name'
    labelEl.classList.add('first')
    labelEl.name = 'First-Name'
    labelContainer.appendChild(labelEl)


    let inputEl = document.createElement('input')
    inputEl.setAttribute("for", first_name)
    inputEl.type = "text"
    inputEl.id = 'fnameinput'
    inputEl.name = 'First-Name'
    inputEl.classList.add('input-style')
    labelEl.appendChild(inputEl)

    //Creating Error msg
    let firstNameErrorEl = document.createElement('p')
    firstNameErrorEl.textContent = "fiiiiii"
    firstNameErrorEl.id = "firstNameError"
    firstNameErrorEl.classList.add("error-msg")
    inputEl.appendChild(firstNameErrorEl)

    let brEl = document.createElement('br')
    labelContainer.appendChild(brEl)

    //creating second name label 

    let lastLabel = document.createElement('label')
    lastLabel.textContent = "Last_Name:"
    lastLabel.id = 'last_name'
    lastLabel.name = 'Last-Name'
    lastLabel.classList.add('second', 'mt-3')
    labelContainer.appendChild(lastLabel)

    //creating second name input 

    let lastInput = document.createElement('input')
    lastInput.setAttribute('for', last_name)
    lastInput.type = 'text'
    lastInput.name = 'Last-Name'
    lastInput.id = 'sname'
    lastInput.classList.add("input-style")
    lastLabel.appendChild(lastInput)

    // creating second name error element
    let secondNameErrorEl = document.createElement('p')
    secondNameErrorEl.textContent = ""
    secondNameErrorEl.id = "secondNameError"
    secondNameErrorEl.classList.add("error-msg")
    lastInput.appendChild(secondNameErrorEl)


    //creating gender  heading
    let GenderEl = document.createElement('p')
    GenderEl.classList.add("gender", 'mt-3')
    GenderEl.textContent = 'Gender'
    labelContainer.appendChild(GenderEl)

    //container for radio buttons
    let genderContainer = document.createElement('div')
    genderContainer.classList.add('gendercontainer')
    GenderEl.appendChild(genderContainer)

    let maleInput = document.createElement('input')
    maleInput.type = "radio"
    maleInput.id = 'male'
    maleInput.value = 'Male'
    maleInput.name = 'gender'
    genderContainer.appendChild(maleInput)

    let labelMale = document.createElement('label')
    labelMale.setAttribute('for', male)
    labelMale.textContent = "Male"
    labelMale.classList.add('male')
    genderContainer.appendChild(labelMale)

    let femaleInput = document.createElement('input')
    femaleInput.type = "radio"
    femaleInput.id = 'female'
    femaleInput.name = 'gender'
    femaleInput.value = 'Female'
    femaleInput.classList.add('radios')
    genderContainer.appendChild(femaleInput)

    let labelfemale = document.createElement('label')
    labelfemale.setAttribute('for', female)
    labelfemale.textContent = "Female"
    labelfemale.classList.add('female')
    genderContainer.appendChild(labelfemale)


    //creating password label
    let passwordEl = document.createElement('label')
    passwordEl.textContent = "Create Password"
    passwordEl.id = 'createPassword'
    passwordEl.name = "Password"
    passwordEl.value = "createpassword"
    labelContainer.appendChild(passwordEl)

    //creating password input
    let passwordInput = document.createElement('input')
    passwordInput.type = 'password'
    passwordInput.setAttribute('for', createPassword)


    //creating button container
    let btnContainer = document.createElement('div')
    btnContainer.classList.add('btn')
    labelContainer.appendChild(btnContainer)

    let BtnEl = document.createElement('button')
    BtnEl.type = 'submit'
    BtnEl.classList.add('button')
    BtnEl.id = 'submitBtn'
    BtnEl.textContent = 'Continue'
    btnContainer.appendChild(BtnEl)

    //creating icon container

    let arrowContainer = document.createElement('div')
    arrowContainer.classList.add('delete-icon-container')
    BtnEl.appendChild(arrowContainer)

    let arrowIcon = document.createElement('i')
    arrowIcon.classList.add("bi", "bi-arrow-right-circle")
    arrowContainer.appendChild(arrowIcon)

    frontPageEl.style.display = "none"
}




nameEl.addEventListener('change', function (event) {
    if (event.target.value === "") {
        fnameEl.textContent = "*Required"
    } else {
        fnameEl.textContent = ""
    }
})

secondnameEl.addEventListener('blur', function (event) {
    if (event.target.value === "") {
        snameEl.textContent = "*Required"
    } else {
        snameEl.textContent = ""
    }
})

myformEl.addEventListener('submit', function (event) {
    event.preventDefault()
})