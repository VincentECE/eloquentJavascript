/*Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster? */


//Exercise 2 part 1 Reversing an array

function reverseArray(array){
    reversed=[];
    for(i=array.length-1; i>=0;i--){
      reversed.push(array[i]);
    }
    return reversed;
  }
  
  //console.log(reverseArray([4,6,7,3]));
  
  
  // Exercise 2 part 2. Reversing an array in place
  
  function reverseArrayInPlace(array){
   let lastIndex = array.length-1;
    
    let temp1;
    
    for(i=0;i<=array.length/2-1; i++){
      temp1=array[lastIndex];
      array[lastIndex]=array[i];
      array[i]=temp1;
      lastIndex--;
    }
    
  }
  
  let doodoo=[2,3,5,6,6];
  
  reverseArrayInPlace(doodoo);
  
  console.log(doodoo);
  
  
  
  
  
  
  
  