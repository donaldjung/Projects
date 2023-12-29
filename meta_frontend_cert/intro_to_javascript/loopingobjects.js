//create object car with properties  speed and color

const car = {
    speed : 10,
    color : "blue"
}
// console log car object
console.log(car)

//loop over object, print object key and values

for (prop of Object.keys(car)) {
    console.log(prop + " : ", car[prop])
}