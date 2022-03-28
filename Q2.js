//Write a JavaScript program to get the first n Fibonacci numbers

/*let a = 0;
let b = 1;

let sum;

console.log(a);
console.log(b);

for(let i =0; i<=5; i++){
    sum = a + b;
    a = b;
    b = sum;
    console.log(sum);
}*/

function fibonnaci(n){
    let fib = [0,1];

    for(let i = 2; i <=n; i++){
        fib.push(fib[i-2] + fib[i-1]);
    }console.log(fib)

}

fibonnaci(10);



