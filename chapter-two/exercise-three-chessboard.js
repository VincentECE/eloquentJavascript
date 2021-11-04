



/* Write a program that creates a string that represents an 8x8 grid, using newline characters to seperate lines. At each position of the grid there is either a space or a # character. The characters should forma chessboard. Passing this strong to console.log should show something like:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # # */

/*
let strng= '';

for (let i=0; i<=7; i++){
  if(i%2==0){
    strng=strng+" "
  }
  
  for(let k=1; k<=8; k++){
    if(k%2==1){
      strng=strng+" "
    }
    else{
      strng=strng+"#"
    }
  }
  strng=strng+"\n"
}

*/

// Version 2

let strng= '';

let size = 10

for (let i=0; i<=size-1; i++){
  if(i%2==0){
    strng=strng+" "
  }
  
  for(let k=1; k<=size; k++){
    if(k%2==1){
      strng=strng+" "
    }
    else{
      strng=strng+"#"
    }
  }
  strng=strng+"\n"
}

