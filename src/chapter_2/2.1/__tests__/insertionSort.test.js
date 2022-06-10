const insertionSort = require('../insertionSort');

describe('insertionSort', () => {
    it('insertionSort [5, 2, 4, 6, 1, 3]', () => {
        const array = [5, 2, 4, 6, 1, 3];
        expect(insertionSort(array)).toEqual([1, 2, 3, 4, 5, 6]);
    });
})

