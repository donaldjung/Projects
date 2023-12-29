
function reccursion(a) {
    console.log(a)
    if (a === 0) {
        return console.log("Done")
    }
    else {
        reccursion(a - 1)
    }
}

reccursion(10)