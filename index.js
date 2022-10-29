function sort(array) {
    console.log(typeof(array))
    if(typeof(array) !== "array" || array.some(x => typeof(x) !== "number")) return "Debes introducir un array de números";
    let finalArray = [];
    function getNumberIndexes(array, number) {
        return {
            solution: array.flatMap((x, i) => {
                if (x !== number) {
                    return [];
                }
                else {
                    return i;
                }
            }),
            modifiedArray: array.flatMap((x, i) => {
                if (x === number) {
                    return [];
                }
                else {
                    return x;
                }
            })
        }
    }
    function getMin(numbers) {
        return Math.min(...numbers);
    }
    function pushMin() {
        getNumberIndexes(array, getMin(array)).solution.forEach(x => finalArray.push(array[x]));
        if (new Set(array).size > 1) {
            array = getNumberIndexes(array, getMin(array)).modifiedArray;
            pushMin(array);
        }
    }
    pushMin();
    return finalArray;
}
// example use: console.log(sort([4, 10, 3, 2, 1, 8, 1, 1, 1])) -> [1, 1, 1, 1, 2, 3, 4, 8, 10]