const insertionSort = (array) => {
    for(let j = 1; j < array.length; j++) {
        const key = array[j];
        let i = j;

        while (i > 0 && array[i - 1] > key) {
            array[i] = array[i - 1];
            i--;
        }
        array[i] = key;
    }
    return array;
}

module.exports = insertionSort;

const array = [5, 2, 4, 6, 1, 3];

console.log(insertionSort(array))
