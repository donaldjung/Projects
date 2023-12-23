//practice with conditional statements
//switch and if

//if statement
var age = 10

if (age >= 65) {
    console.log("You get your income from your pension.")
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary.")
} else if (age < 18) {
    console.log("You get an allowance.")
} else {
    console.log("The value of the age variable is not numerical.")
}

//switch statement

var day = "Monday"

switch(day) {
    case "Monday":
        console.log("Today is", day)
        break;
    case "Tuesday":
        console.log("Today is", day)
        break;
    case "Wednesday":
        console.log("Today is", day)
        break;
    case "Thursday":
        console.log("Today is", day)
        break;
    case "Friday":
        console.log("Today is", day)
        break;
    case "Saturday":
        console.log("Today is", day)
        break;
    case "Sunday":
        console.log("Today is", day)
        break;
    default:
        console.log("This is not a day of the week.")
        break;
}