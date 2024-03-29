/**
 * RangeCollection class
 * A pair of integers define a range, for example: [1, 5). This range includes integers: 1, 2, 3, and 4.
 * A range collection is an aggregate of these ranges: [1, 5), [10, 11), [100, 201)
 *
 * @author Gavin Jiang
 *
 * @class
 */
class RangeCollection {
    _range;

    constructor() {
        this._range = new Set();
    }

    /**
     * @public
     *
     * Adds a range to the collection
     * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
     *
     * @throws TypeError if range is not array {@link Utils#rangeParamCheck}
     * @throws RangeError if array's length is not equal to 2 {@link Utils#rangeParamCheck}
     * @throws Error if the elements of array are not integer {@link Utils#rangeParamCheck}
     * @throws Error if the beginning element greater than last element {@link Utils#rangeParamCheck}
     */
    add(range) {
        console.log('add', range);

        Utils.rangeParamCheck(range);

        let start = range[0];
        let end = range[1];

        for (let i = start; i < end; i++) {
            this._range.add(i);
        }
    }

    /**
     * @public
     *
     * Removes a range from the collection
     * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
     *
     * @throws TypeError if range is not array {@link Utils#rangeParamCheck}
     * @throws RangeError if array's length is not equal to 2 {@link Utils#rangeParamCheck}
     * @throws Error if the elements of array are not integer {@link Utils#rangeParamCheck}
     * @throws Error if the beginning element greater than last element {@link Utils#rangeParamCheck}
     *
     */
    remove(range) {
        console.log('remove', range);

        Utils.rangeParamCheck(range);

        let start = range[0];
        let end = range[1];

        for (let i = start; i < end; i++) {
            this._range.delete(i);
        }
    }

    /**
     * @public
     *
     * @return {Array<number>} the list of ranges in the range collection
     */
    toArray() {
        let result = Array.from(this._range);
        console.log('print', result);

        return result;
    }
}