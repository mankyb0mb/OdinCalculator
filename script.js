let screen = document.querySelector(".screen")
let numbers = document.querySelectorAll(".num")

// AC BUTTOn
let AC = document.querySelector(".AC")
AC.addEventListener("mousedown", () => {
    AC.style.backgroundColor = "#8fe6e9"
})

AC.addEventListener("mouseup", () => {
    AC.style.backgroundColor = "#27696b"
    screen.textContent = 0
    display = ""
})

let invert = document.querySelectorAll(".Invert")
let percent = document.querySelectorAll(".Percent")
let display = ""


// clickable number buttons
for (let i = 0; i < 11; i++) {
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

screen.textContent = 0


