//Q4. Write a JavaScript program to compute the absolute difference between a specified number and 19. 
//Returns triple their absolute difference if the specified number is greater than 19.

/*let x = 19;
let y = 18;
let z;
let a;
let b;

if(y>x){
    z = y-x;
    a = z*3;
    console.log(a);
}
else {
    b = 19 - y;
    console.log(b);
}*/

 

//OR

function triple_diff(n) {
    if (n <= 19) {
      return (19 - n);
      }
    else
      {
       return (n - 19) * 3;
      }
  }
  
  console.log(triple_diff(21));