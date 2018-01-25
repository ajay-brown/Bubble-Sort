var bubbleSort = function(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
  for (var j = arr.length-1;j>=0;j--){
    for (var i=1;i<=j;i++){
        if (arr[i-1]>arr[i]) {
       var movingVar = arr[i-1];
          arr[i-1] = arr[i];
          arr[i] = movingVar;
    }
    }  
}
  console.log(arr)
  return arr;
}
var newArr = [4,3,2,1];
bubbleSort(newArr);