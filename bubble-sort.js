var bubbleSort = function(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    var leftArr = [];
    var rightArr = [];
    for (var i=0;i<arr.length;i++){
      let firstVal = arr[i];
      let secondVal = arr[i+1];
        if (firstVal>secondVal) {
        rightArr.push(firstVal);
        leftArr.push(secondVal);
        firstVal = arr[i+1];
    } else {
        leftArr.push(firstVal);
        rightArr.push(secondVal);
        firstVal = arr[i+1];
    }
   
}
return leftArr.concat(rightArr);
}
