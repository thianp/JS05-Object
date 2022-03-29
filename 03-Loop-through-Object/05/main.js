let object = {};

function createObj(obj) {
    for (let key in obj) {
        if (obj[key] > 1) {
            object[`${key}s`] = obj[key]
        } else {
        object[key] = obj[key];
        }
    }
    console.log(object);
}

createObj({watermelon: 1, orange: 5});