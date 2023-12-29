//introduction to arrays

var carriage0 = "wheat";
var carriage1 = "barley";
var carriage2 = "rice";
var carriage3 = "corn";

//insert variables in an array
var train1 = [carriage0, carriage1, carriage2, carriage3];

//function to loop through array 

function listArrayItems(array) {
    for (i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

listArrayItems(train1)
