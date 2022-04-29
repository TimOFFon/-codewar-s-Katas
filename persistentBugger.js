function persistence(num) {
    //code me
    let arr = [...num.toString()].map(Number);
    let chekNumber = arr.reduce((acc, item) => acc * item);
    let multiCost = 0;
    while (arr.length !== 1) {
        multiCost++;
        arr = [...chekNumber.toString()].map(Number);
        chekNumber = arr.reduce((acc, item) => acc * item);
    }
    return multiCost;
}
