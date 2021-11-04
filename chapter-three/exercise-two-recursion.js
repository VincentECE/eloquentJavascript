/* We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 
to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. 
The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

*/


/*The following version 1 code works as expected with values of 50, and 75. 
Entering -1 results in a Maximum call stack because the parameter 
that was passed in, (-1 in this case) causes num to never hit either 
of the exiting conditions. version 2 below will change any negative 
values given to a positive value to avoid the maximum call stack*/

// Version 1

/*
function isEven(num){
  if(num===0){
    return true;
  }
  else if(num===1){
    return false;
  }
  else{
    return isEven(num-2);
  }
}


console.log(isEven(-1));
*/


//version 2

function isEven(num){
    if(num<0){
      num = -num;
    }
    
    if(num===0){
      return true;
    }
    else if(num===1){
      return false;
    }
    else{
      return isEven(num-2);
    }
  }
  
  
  console.log(isEven(-1));
  
  

