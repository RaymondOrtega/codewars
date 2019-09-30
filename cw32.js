// Create a method that takes an array/list as an input, and outputs the index at which the sole odd number is located.

// This method should work with arrays with negative numbers. If there are no odd numbers in the array, then the method should output -1.

function oddOne(arr) {

    for (let i=0; i<arr.length;i++){
       console.log(arr[i])
       if(arr[i]%2===0){
  
        if(i==arr.length-1){
          return -1
        }
      }else if(arr[i]%2!==0||arr[i+1]%2!==0){
        return i 
      }
    }
  }

//   function oddOne(arr) {
//     return arr.findIndex(x => x % 2 != 0);
//   }