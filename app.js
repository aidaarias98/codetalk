
// // uniqueInOrder('AAAABBBCCDAABBB') == ['A','B','D','A','B']
// // uniqueInOrder('ABBCcAD') == ['A','B','C','c','A','D']
// uniqueInOrder([1,2,2,3,3]) == [1,2,3]


// //solution 1
  function uniqueInOrder(it) {
    var result = [] //declared variable for the output array
    var last //temp variable just to hold something
    //console.log(it.length); //consoles the length of the string or the array (7)
    for (var i = 0; i<it.length; i++) { 
   //console.log(i);//this consoles the index
   // console.log(it[i]);//this consoles the it variable index letter 
      if (it[i] !== last) {  //not equal value or type
        result.push(last = it[i]) //pushing into the current index into result while making last equal to the index
      }
    }
    
    return result //return result after the loop is completed
  }
   //////////////////////////0123456 
  console.log(uniqueInOrder('ABBCcAD'));//calling the function to give output array
 

  //index two logic check
console.log("B" !== "B");  
console.log("B" == "B"); 





