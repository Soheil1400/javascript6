let Result
const SearchObject = (obj, Number) => {
    if (typeof obj !== "object") {
        return "pls enter your object arr"
    }
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            return Result = obj[key] === Number ? 'true' : 'false'
        }if (typeof obj[key] === 'object'){
            return SearchObject(obj[key], Number)
        }
    }
    return "false"
}
const object = {
    d: {
        c: {
            b: {
                a: {
                    num: 20,
                    str: 'hi'
                }
            }
        }
    }
}
console.log(SearchObject(object, 20))



