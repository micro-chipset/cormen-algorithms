const insertionSort = require('../insertionSortDesc');

describe('insertionSortDesc', () => {
    it('insertionSortDesc [5, 2, 4, 6, 1, 3]', () => {
        const array = [5, 2, 4, 6, 1, 3];
        expect(insertionSort(array)).toEqual([6, 5, 4, 3, 2, 1]);
    });
})

