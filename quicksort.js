//using recursion + 3 variables 
function quickSort(arr) {
let leftArr =[];
let rightArr = [];
let equalArr = [];
let pivot =  arr[0];
    if (arr.length === 0){
        return arr;
    }
    for (var i=1;i<arr.length;i++){
        if(arr[i]<arr[pivot]) { 
            leftArr.push(arr[i]);
        } else if (arr[i] > arr[pivot]) {
            rightArr.push(arr[i]);
        } else {
            equalArr.push(arr[i]);
        }
    }
    return quickSort(leftArr).concat(pivot,equalArr, quickSort(rightArr));
}