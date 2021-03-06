/*You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase âBâ characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase âBâ characters). Rewrite countBs to make use of this new function. */

// version 1

/*
function countBs(str){
  
  let counter = 0;
  
  for(let i = 0; i <= str.length-1;i++){
    if(str[i] == "B"){
      counter = counter+1;
    }

  }
   return counter;
}

console.log(countBs("imma B.. imma B... Buzz Buzz"));

*/


//Version 2. This function now takes two arguments, a string, and the character to search for


function countChar(str, letter){
  
    let counter = 0;
    
    for(let i = 0; i <= str.length-1;i++){
      if(str[i] == letter){
        counter = counter+1;
      }
  
    }
     return counter;
  }
  
  console.log(countChar("Is Mayonnaise an instrument?",'s'));