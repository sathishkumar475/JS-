//alert( ' hollow world');
//alert('open web');

var cars = ["BMW", "VOVLO", "NEW "];
//document.getElementById ('demo').innerHTML= cars;
console.log(cars);

let cars = ["BMW", "VOVLO"];  //array operation
document.getElementById('demo').innerHTML = "cars";
console.log(cars.length);


let BMW = cars[0];
document.getElementById('demo').innerHTML = 'BMW'; //array item

let len = cars.length;      //array length
document.getElementById('demo').innerHTML = len;  


for (let i = 10; i <= 1; i--) {   //odd number 

    if (i % 2 !== 0) {
        console.log(" this is odd number" + i)


    }

}