

class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    HeadlightsOn() {
        console.log("Headlights are on.")
    }
}


const car1 = new Car("red", "fast")

console.log(car1.color, car1.speed)
car1.HeadlightsOn()