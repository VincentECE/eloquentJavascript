/* Exercise from Eloquent Javascript 3rd edition Chapter 2 Exercise 1

    Write a loop that makes seven calls to console.log to output the following triangle:

    #
    ##
    ###
    ####
    #####
    ######
    #######

*/



let strings = "";

for(let i=0; i<=6; i++){
  strings = strings + '#';
  console.log(strings);
}