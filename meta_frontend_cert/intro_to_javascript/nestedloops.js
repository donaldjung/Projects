//practice nested loops


//nested for loop, going through summer months 

for (var year = 2023; year < 2025; year++) {
    console.log(year)
    for (var month = 6; month < 9; month++) {
        console.log("------", month)
    }
}

//multiplication table nested for loop

for (var firstNum = 0; firstNum < 2; firstNum++){
    for (var secondNum = 0; secondNum < 10; secondNum++){
        console.log(firstNum + " times " + secondNum + " equals " + (firstNum * secondNum))
    }
}
