let screen = document.querySelector(".screen")
let display = ""
let numbers = document.querySelectorAll(".num")

// AC BUTTON
let AC = document.querySelector(".AC")
AC.addEventListener("mousedown", () => {
    AC.style.backgroundColor = "#8fe6e9"
})

AC.addEventListener("mouseup", () => {
    AC.style.backgroundColor = "#27696b"
    screen.textContent = 0
    display = ""
})

let invert = document.querySelector(".Invert")

// Percent BUTTON
let percent = document.querySelector(".Percent")
percent.addEventListener("mousedown", () => {
    percent.style.backgroundColor = "#8fe6e9"
})

percent.addEventListener("mouseup", () => {
    percent.style.backgroundColor = "#27696b"
    display = display / 100
    screen.textContent = display
})




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

let asdf = "-asdf"
let arraysdf = ["-", 'a','s','d','f']

screen.textContent = 0


