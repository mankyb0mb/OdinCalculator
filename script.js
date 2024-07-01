let screen = document.querySelector(".screen")
let display = ""
let numbers = document.querySelectorAll(".num")


let opColor

let numOne = 0
let numTwo
let opSelected = false
let meow = "asdf"
let opType = "addition"

// LIMITS SCREEN DISPLAY TO 9 CHARACTERS========================
function shortener(change = display, end = "9"){
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
        opSelected = false
        opType = null
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
        if (screen.textContent.at(0) !== "-"){
            if (screen.textContent.at(0) == "0" && screen.textContent.length >1) {
                {
                    if (Number(display) == 0){
                        display = ""
                        screen.textContent = 0
                    }
                    else {
                        display = "-" + screen.textContent
                        screen.textContent = shortener(display, 9)
                    }
                }
            }
            else if (display > 0){
                display = "-" + screen.textContent
                screen.textContent = shortener(display, 9)
            }
        }
        else {
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
            display = String(display / 100)
            console.log(display)
            screen.textContent = shortener()
        }
    })
}


//end DARK ROW
}


//OPERATOR BUTTONS =============================================
{
let division = document.querySelector(".Divi")
let multiplication = document.querySelector(".Multi")
let subtract = document.querySelector(".Minus")
let addition = document.querySelector(".Plus")
let equal = document.querySelector(".Equal")

function operatorFunc(type = opType){
    let signOp
    if (opType == "division"){

    }
    else if (opType == "multiplication"){
        
    }
    else if (opType == "subtraction"){
        
    }
    else if (opType == "addition"){
        console.log(numOne + " + " + display)
        display = Number(numOne) + Number(display)
    }
    console.log(display)
    return shortener(String(display))
    opSelected = false
}

//-----------COLORS BACK
opColor = () => {
    division.style.backgroundColor = "#fdbe47"
    multiplication.style.backgroundColor = "#fdbe47"
    subtract.style.backgroundColor = "#fdbe47"
    addition.style.backgroundColor = "#fdbe47"
}

//-----------DIVISION
division.addEventListener("mousedown", () => {
    division.style.backgroundColor = "#ffe7bb"
})

division.addEventListener("mouseup", () => {
    division.style.backgroundColor = "#fdbe47"
})


//-----------MULTIPLICATION
multiplication.addEventListener("mousedown", () => {
    multiplication.style.backgroundColor = "#ffe7bb"
})

multiplication.addEventListener("mouseup", () => {
    multiplication.style.backgroundColor = "#fdbe47"
})


//-----------SUBTRACTION
subtract.addEventListener("mousedown", () => {
    opColor()
    subtract.style.backgroundColor = "#ffe7bb"
    opType = "subtraction"
    opSelected = true
    numOne = display
    display = ""
})

subtract.addEventListener("mouseup", () => {

})


//-----------ADDITION

addition.addEventListener("mousedown", () => {
    opColor()
    addition.style.backgroundColor = "#ffe7bb"
    opType = "addition"
    opSelected = true
    numOne = display
    display = ""
})

addition.addEventListener("mouseup", () => {
    // addition.style.backgroundColor = "#fdbe47"
})

//-----------EQUAL
{
equal.addEventListener("mousedown", () => {
    equal.style.backgroundColor = "#ffe7bb"
})

equal.addEventListener("mouseup", () => {
    equal.style.backgroundColor = "#fdbe47"
    if (display != "") {
        display = operatorFunc()
        screen.textContent = display
    }
})
}


//end OPERATOR
}


// NUMBERPAD BUTTONS ===========================================
{

//----------- Numbers
{
for (let i = 0; i < 9; i++) {
    console.log(numbers[i])
    numbers[i].addEventListener("mousedown", () => {
        numbers[i].style.backgroundColor = "#9be9f8"
        opColor()
    })
    
    numbers[i].addEventListener("mouseup", () => {
        numbers[i].style.backgroundColor = "#3f9daf"
        if (screen.textContent.length < 9) {
            display += numbers[i].textContent
            screen.textContent = display
        }
    })
    
}
}

//----------- Zero
{
let zero = document.querySelector(".buttonBig")
zero.addEventListener("mousedown", () => {
    zero.style.backgroundColor = "#9be9f8"
    opColor()
})

zero.addEventListener("mouseup", () => {
    zero.style.backgroundColor = "#3f9daf"
    if (screen.textContent.length < 9) {
        if (display == "0" || display == ""){
        }
        else {
            display += zero.textContent
            screen.textContent = display
        }
    }
    console.log(display)
})
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
        if (display == "" || opSelected){
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


