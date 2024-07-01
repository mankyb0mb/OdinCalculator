let screen = document.querySelector(".screen")
let display = ""
let numbers = document.querySelectorAll(".num")


// LIMITS SCREEN DISPLAY TO 9 CHARACTERS========================
function shortener(change, end = "8"){
    if (change.length >= 9) {
        change = change.substring(0, end)
    }
    return change

}


//DARK ROW BUTTONS =============================================
{


//----------- AC BUTTON
{
    let AC = document.querySelector(".AC")
    AC.addEventListener("mousedown", () => {
        AC.style.backgroundColor = "#8fe6e9"
    })

    AC.addEventListener("mouseup", () => {
        AC.style.backgroundColor = "#27696b"
        screen.textContent = 0
        display = ""
    })
}


//----------- Invert BUTTON
{
    let invert = document.querySelector(".Invert")
    invert.addEventListener("mousedown", () => {
        invert.style.backgroundColor = "#8fe6e9"
    })

    invert.addEventListener("mouseup", () => {
        invert.style.backgroundColor = "#27696b"
        if (screen.textContent.at(0) !== "-" && screen.textContent.at(0) !== "0"){
            display = "-" + screen.textContent
            screen.textContent = shortener(display, 9)
        }
        else if (screen.textContent.at(0) !== "0"){
            display = display.substring(1)
            screen.textContent = display
        }
    })
}


//----------- Percent BUTTON
{
    let percent = document.querySelector(".Percent")
    percent.addEventListener("mousedown", () => {
        percent.style.backgroundColor = "#8fe6e9"
    })

    percent.addEventListener("mouseup", () => {
        percent.style.backgroundColor = "#27696b"
        if (screen.textContent !== "0"){
            display = display / 100
            screen.textContent = display
        }
    })
}


//end DARK ROW
}

//OPERATOR BUTTONS =============================================
{


//-----------DIVISION
{
let division = document.querySelector(".Divi")
division.addEventListener("mousedown", () => {
    division.style.backgroundColor = "#ffe7bb"
})

division.addEventListener("mouseup", () => {
    division.style.backgroundColor = "#fdbe47"
})
}


//-----------MULTIPLICATION
{
let multiplication = document.querySelector(".Multi")
multiplication.addEventListener("mousedown", () => {
    multiplication.style.backgroundColor = "#ffe7bb"
})

multiplication.addEventListener("mouseup", () => {
    multiplication.style.backgroundColor = "#fdbe47"
})
}


//-----------SUBTRACTION
{
let subtract = document.querySelector(".Minus")
subtract.addEventListener("mousedown", () => {
    subtract.style.backgroundColor = "#ffe7bb"
})

subtract.addEventListener("mouseup", () => {
    subtract.style.backgroundColor = "#fdbe47"
})
}


//-----------ADDITION
{
let addition = document.querySelector(".Plus")
addition.addEventListener("mousedown", () => {
    addition.style.backgroundColor = "#ffe7bb"
})

addition.addEventListener("mouseup", () => {
    addition.style.backgroundColor = "#fdbe47"
})
}


//-----------EQUAL
{
let equal = document.querySelector(".Equal")
equal.addEventListener("mousedown", () => {
    equal.style.backgroundColor = "#ffe7bb"
})

equal.addEventListener("mouseup", () => {
    equal.style.backgroundColor = "#fdbe47"
})
}


//end OPERATOR
}

// NUMBERPAD BUTTONS ===========================================
{

//----------- Numbers
{
for (let i = 0; i < 10; i++) {
    console.log(numbers[i])
    numbers[i].addEventListener("mousedown", () => {
        numbers[i].style.backgroundColor = "#9be9f8"
    })
    
    numbers[i].addEventListener("mouseup", () => {
        numbers[i].style.backgroundColor = "#3f9daf"
        if (screen.textContent.length < 9) {
            display += numbers[i].textContent
            screen.textContent = display
        }
        console.log(display)
    })
    
}
}


//----------- Decimal
{
function decimalChecker(checkString = display){
    for (let i = 0; i < checkString.length; i++) {
        if (checkString.at(i) == ".") {
            i = checkString.length
            return true
        }
    }
}

let decimal = document.querySelector(".Deci")
decimal.addEventListener("mousedown", () => {
    decimal.style.backgroundColor = "#9be9f8"
})

decimal.addEventListener("mouseup", () => {
    decimal.style.backgroundColor = "#3f9daf"
    if (decimalChecker()) {}
    else if (display.length >= 9) {}
    else {
        if (display == ""){
            display = 0
        }
        display = display + "."
        screen.textContent = display
    }
})
}

//end NUMBERPAD
}

let asdf = "1.3456789"
let arraysdf = ["-", 'a','s','d','f']

screen.textContent = 0


