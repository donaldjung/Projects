
var shoes = {
    price: 100,
    tax: 1.2,
    totalprice: function() {
        console.log("The total price is", (this.tax*this.price))
     }
    } 

shoes.totalprice()