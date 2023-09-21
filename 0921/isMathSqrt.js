const isSquare = (array) => {
    if(array.length <= 0) return undefined;
    const result = array.every(e => Number.isInteger(Math.sqrt(e)));
    return result;
};

console.log(isSquare([1, 4, 9, 81, 36, 1024]));

module.exports = { isSquare };
