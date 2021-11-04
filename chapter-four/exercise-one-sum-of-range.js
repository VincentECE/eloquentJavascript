

/*

//Exercise 1 part 1. This function takes in two numbers and returns an array with a the same number of indexes inside

function range(num1, num2){
  a1=[];
  for(i=num1; i<= num2; i++){
    a1.push(i);
  }
  return a1;
}

console.log(range(3,10));

*/

// Exercise 1 part 2

function sum(array){
    accumulator=0;
    for(let i=0; i<= array.length-1; i++){
      accumulator += array[i];
    }
    
    return accumulator;
    
  }
  
  
  
  
  // Exercise 1 part 3. This is a rewritten version of part 1 that can take in a +- step value
  
  function range(num1, num2, step=1){
    a1=[];
    
    if(step>0){
      for(i=num1; i<= num2; i=i+step){
      a1.push(i);
      }
    }
    else{
      for(i=num1; i>= num2; i=i+(step)){
        
      a1.push(i);
      }
    }
    console.log(a1);
    return a1;
  }
  
  console.log(sum(range(20,30,2)));
  