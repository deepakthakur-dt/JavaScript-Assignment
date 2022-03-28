//Write a JavaScript program to compute the sum of an array of integers.

let a =[1,2,3,4,10];
let sum = 0;

for (i in a){
    sum = sum + a[i];
}
console.log("Sum of an array::" +sum);