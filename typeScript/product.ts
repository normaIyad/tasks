//task 4 
/* 

Task 4: 
Create a TypeScript interface for a Product with the following properties:

name: string
price: number
Write a function that:

Accepts an array of Product objects.
Returns the total price of all products.
*/
interface Product {
    name : string ,
    price : number ,
}

function getTotalPrice(products : Product[] ) : number {
    return products.reduce((total, product) => total + product.price, 0);
}
const products : Product[] = [
    {name: 'apple', price: 10},
    {name: 'orange', price: 20},
    {name: 'rice', price: 40},
];

console.log(getTotalPrice(products)); 
/*
Task 5: 
Write a TypeScript function that accepts a string and checks if it is a valid email address. You can assume the email should have a basic structure like username@domain.com. Use regular expressions to implement this.  
*/
function isValidEmail(email : string) : boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;
    return emailRegex.test(email);
}
console.log(isValidEmail("test@example.com"));
