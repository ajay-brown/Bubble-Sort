function bubbleSort(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let length = arr.length;
    let leftArr;
    let rightArr;
    for (var i=0;i<length;i++){
        if (arr[i]>arr[i+1]) {
        rightArr.push(arr[i]);
        leftArr.push(arr[i+1]);
        i++;
        i++;
    } else {
        leftArr.push(arr[i]);
        rightArr.push(arr[i+1]);
        i++;
        i++;
    }
    return leftArr + rightArr
}
}