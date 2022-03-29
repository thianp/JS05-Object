function checkEmptyObj(obj) {
    let count = 0;
    for (let key in obj) {
        count++;
    }
    return count;
}

let empty = {};
console.log(checkEmptyObj(empty));