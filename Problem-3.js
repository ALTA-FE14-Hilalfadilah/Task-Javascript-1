function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    let minIndex = 0;
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        } else if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
    }

    return { min: min, max: max, minIndex: minIndex, maxIndex: maxIndex };
}

let numbers = [5, 7, 4, -2, -1, 8];
let result = findMinMax(numbers);
console.log(result); // {min: 3, max: 20, minIndex: 3, maxIndex: 2}
