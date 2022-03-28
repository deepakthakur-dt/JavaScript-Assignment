//Q7. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

let s = 'Java jav learn';

var a = s.match(/\w[a-z]{0,}/gi); // converted into array
var res = a[0];

for(var i = 1; i<a.length; i++){
    if(res.length < a[i].length){
        res = a[i];
    }
} 
console.log(res);