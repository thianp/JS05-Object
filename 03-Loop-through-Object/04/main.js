let object = {};

function createObj(obj) {
    for (let key in obj) {
        if (key === "stop" || obj[key] === "stop") {
            break;
        } else {
        object[key] = obj[key];
        }
    }
    console.log(object);
}

createObj({a: "b", stop: "c"});