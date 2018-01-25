var bubbleSort = function(arr) {
    if (!Array.isArray(arr)) { //if not array, end
        return null;
    }
  for (var j = arr.length-1;j>=0;j--){ //first loop starting at the end of the array
    for (var i=1;i<=j;i++){ //second loop starting at the beginning of the array
        if (arr[i-1]>arr[i]) { //if first value is less than or lower number... going down the array to match
       var movingVar = arr[i-1]; //assign higher val to moving variable
          arr[i-1] = arr[i]; //higher variable is now the current variable 
          arr[i] = movingVar; //lower variable is the moving variable
    }
    }  
}
  console.log(arr)
  return arr
}
