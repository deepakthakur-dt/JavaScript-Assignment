//Q5. Write a JavaScript program to create a new string adding "Py" in front of a given string. 
//If the given string begins with "Py" then return the original string.

let s = 'Deepak';
let d = 'py'



function str_man(s){
    
    if(s[0]=='p' && s[1]=='y'){
        return s;
    }
    else{
        return ('py' + s);
    }
}

console.log(str_man('deepak')); 


