//using recursion + 3 variables 
let newArr= [];
function quickSort(arr) {
let leftArr =[];
let rightArr = [];
let equalArr = [];
let pivot = (arr.length /2) || 0;
    if (arr.length < 2){
        return arr;
    }
    for (var i=0;i<arr.length;i++){
        if(arr[i]>arr[pivot]) { 
            rightArr.push(arr[i]);
        } else if (arr[i] < data[pivot]) {
            leftArr.push(arr[i]);
        } else {
            equalArr.push(arr[i]);
        }
    }
    newArr.push(leftArr, equalArr, rightArr);
  //  quickSort(newArr);
}