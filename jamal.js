
//let firstName = "John";
//let lastName = "Doe";

//function greet(firstName, lastName){
    //console.log("Hello " + firstName + " " + lastName );
//}

    //greet(firstName,lastName);


    //const num1 = 30;
    //const num2 = 20;

    //function calculateSumOfTwoNumbers(num1,num2){
        //return num1 + num2;
    //}

    //const result1 = calculateSumOfTwoNumbers(num1,num2);
    //const result2 = calculateSumOfTwoNumbers(7,6);
    //const result3 = calculateSumOfTwoNumbers(231,421);

    //console.log(result1);
    //console.log(result2);
    //console.log(result3);

//let num1= 20;
//let num2= 24;
//let num3= 32;

//function autis(num1,num2,num3){
    //return num1 * num2 / num3;
//}

//const answer1 = autis(num1,num2,num3);
//const answer2 = autis(321,6421,521);
//const answer3 = autis(782,4217,5217);

//console.log(answer1);
//console.log(answer2);
//console.log(answer3);

const cart = [
    { productName: "T-shirt", price:20},
    { productName: "Jeans", price:50},
    { productName: "Sneakers", price:80},
    { productName: "Mask", price:90},
    { productName: "Dildo", price:150},
    { productName: "Butt plug", price:80},
    { productName: "Flesh toy", price:130},
];
const calculateTotalPrice = (cart) => {
    let totalPrice = 0;
    for (let product of cart){
        totalPrice = totalPrice + product.price;
    }
    return totalPrice;
}

const totalPrice = calculateTotalPrice(cart);
console.log ("The total price: " + totalPrice);