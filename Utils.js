class Utils {
    /**
     * Check the param:
     * 1. must be array;
     * 2. two elements;
     * 3. start must be less than or equal to end.
     * @param {Array<number>} range
     * @public
     * @static
     */
    static rangeParamCheck(range) {
        if (!Array.isArray(range)) {
            throw new TypeError(`range must be array, instead of ${range}`);
        }

        if (range.length !== 2) {
            throw new RangeError( `range must have 2 elements, instead of ${range.length}`);
        }

        let start = range[0];
        let end = range[1];
        if (Number.isInteger(start) && Number.isInteger(end)) {
            if (start > end)
                throw new Error(`the beginning (${start}) must be less than or equal to the end (${end})`);
        } else {
            throw new Error(`the elements of range must be integer, instead of ${range}`);
        }
    }
}