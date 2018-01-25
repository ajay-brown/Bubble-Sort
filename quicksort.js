//using recursion + 3 variables 

function quickSort(arr) {
    let newArr;
    if (arr.length===0) {
        return newArr;
    }
    let pivot = arr[0];
    let leftArr;
    let rightArr;
    for (var i=1;i<arr.length;i++){
        if(arr[i]>arr[i+1]) { 
            leftArr.push(arr[i+1]);
            rightArr.push(arr[i]);

        }
    }
    newArr.push(leftArr, pivot, rightArr);
    quickSort(newArr);
}