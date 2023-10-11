//Question 1 - Grade Calculator.
let score = parseInt(prompt("Enter the students score"))
if (score >= 90 && score < 100) {
    console.log("your scoreGrade is A")
} else if (score >= 80 && score < 90) {
    console.log("Your scoreGrade is B")
} else if (score >= 70 && score < 80) {
    console.log("your scoreGrade is C")
} else if (score >= 60 && score < 70) {
    console.log("your score grade is D")
} else if (score < 60) {
    console.log("you scored an F")
} else if (score === !isNaN) {
    console.log("invalid input")
} else {
    alert("cancelled")
}

//Question 2 - Leap Year Checker.
let year = parseInt(prompt("Enter year"))
let const1 = 4 && 400
if (year % const1 === 0) {
    console.log("This is a leap year")
} else {
    console.log("Not a leap year")
}

//Question 3 - Temperature classifier.
let Temp = parseInt(prompt("Enter Temperature"))
if (Temp > 30) {
    console.log("Temperature is hot")
} else if (Temp > 20 && Temp < 30) {
    console.log("The temperature is moderate")
} else if (Temp < 20) {
    console.log("temperature is cold")
} else {
    alert("cancelled")
}

//Question 4 - LogIn Sysytem.
let user = prompt("Enter Username")
let Username = "User123"
if (user == Username) {
    prompt("Enter Password")
} else {
    alert("Cancelled")
} let Password = pass = "Password123"
if (Password === pass) {
    console.log("login successful")
} else {
    console.log("login Failed")
}

//Question 5 - Number Comparison.
let num1 = parseInt(prompt("Enter value1"))
let num2 = parseInt(prompt("Enter value2"))
if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`)
} else if (num1 < num2) {
    console.log(`${num1} is less than ${num2}`)
} else if (num1 == num2) {
    console.log(`${num1} is equal to ${num2}`)
}

//Question 6 - Eligibility checker.
let Question1 = parseInt(prompt("Kindly entrer your age"))
let Question2 = confirm("Are you a student?")
if (Question1 >= 18) {
    console.log("You are eligible")
} else {
    console.log("you are not eligible")
}

//Question 7 - Voting Eligibility.
let age = parseInt(prompt("Kindly fill in your age"))
let status = confirm("Are you a citizen of this country?")
if (age >= 18) {
    console.log("You are eligible to vote")
} else {
    console.log("you are not eligible to vote")
}

//Question 8 - Password Strength checker.
let password = prompt("Enter your password")
let passwordlength = password.length
if (passwordlength < 8) {
    console.log("Your password is weak")
} else if (passwordlength >= 8) {
    console.log("medium")
} else if (passwordlength >= 8) {
    console.log("you have a strong password")
}

//Question 9- ATM simulator.
let balance = 2000
let Question3 = prompt("Enter the amount to be withdrawn")
if (Question3 > balance) {
    alert("withdrawal in process, kindly wait")
} else {
    console.log("Insufficient funds")
}

//Question 10 - Multiple Conditions.
let num3 = prompt("Enter  your first number")
let operator = prompt("Enter your preffered Operator")
let num4 = prompt("Enter your second number")
if (operator = ("+")) {
    console.log(eval(`${num3} + ${num4}`))
} else if (operator = ("-")) {
    console.log(eval(`${num3} - ${num4}`))
} else if (operator = ("/")) {
    console.log(eval(`${num3} / ${num4}`))
} else if (operator = (`*`)) {
    console.log(eval(`${num3} * ${num4}`))
}




