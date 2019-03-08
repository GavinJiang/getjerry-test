/**
 * RangeCollection2 class
 * A pair of integers define a range, for example: [1, 5). This range includes integers: 1, 2, 3, and 4.
 * A range collection is an aggregate of these ranges: [1, 5), [10, 11), [100, 201)
 *
 * @author Gavin Jiang
 *
 * @class
 */
class RangeCollection2 {
    _range;
    _map;

    constructor() {
        this._range = [];
        this._map = {};
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
            if (!this._map[i]) {
                this._range.push(i);
                this._map[i] = true;
            }
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
     */
    remove(range) {
        console.log('remove', range);

        Utils.rangeParamCheck(range);

        let start = range[0];
        let end = range[1];

        let map = {};
        for (let i = start; i < end; i++)
            map[i] = true;

        for (let i = this._range.length - 1; i >= 0; i--) {
            let key = this._range[i];
            if (map[key]) {
                this._range.splice(i, 1);
                delete this._map[key];
            }
        }
    }

    /**
     * @public
     *
     * @return {Array<number>} the list of ranges in the range collection
     */
    toArray() {
        console.log('print', this._range);

        return this._range;
    }

}