

module.exports = function towelSort (matrix) {

	// condition 1)matrix no params 2)matrix is empty
  if (matrix === undefined || matrix.length === 0) {return [];}
  		// create an empty array for adding result
      let array = [];
    for (let i = 0; i < matrix.length; i++) {
     if (i % 2 === 0) { //counter for integer value
        array = array.concat(matrix[i]);   // .concat add an array to empty array
      } else { array = array.concat( matrix[i].reverse() ); // .concat add an array not an integers values to empty array
       }
    }
    return array;
 }
      
       
        
      
    
   
  	
   
   

