/**
 *
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.numberOfDuplicates = function numberOfDuplicates(arr) {
    let counter = [];
    let newArr = [];
    for (let i=0; i<arr.length; i++){
        newArr[i] = 1;
        counter[i] = arr[i];
        for (let j=0; j<i; j++){
            if (counter[j]===arr[i]){
               newArr[i]++
            }
        }
    }
    return newArr;
    throw new Error('Task not implemented');
};

/**
 *
 * @param obj: {Object}
 * @returns {Number}
 */
module.exports.countObjectStrength = function countObjectStrength(obj) {
    let counter = 0;
    for (value in obj){
        switch (typeof obj[value]){
            case 'undefined':
                counter +=0;
                break;
            case 'boolean':
                counter +=1;
                break;
            case 'number':
                counter +=2;
                break;
            case 'string':
                counter +=3;
                break;
            case 'object':
                counter +=5;
                break;
            case 'function':
                counter +=7;
                break;
            case 'bigint':
                counter +=9;
                break;
            case 'symbol':
                counter +=10;
                break;
        }
    }
    return counter
    throw new Error('Task not implemented');
};
