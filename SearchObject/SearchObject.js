let Key
const SearchObject = (obj,Number) => {
    if (typeof obj !== "object") {
        return "pls enter your object arr"
    }
    for (let key in obj) {
        Key = `${key}`
        if (Key === "number"){
            let Result = obj.number === Number ? 'true' : 'false'
            return Result
        }
    }
    return SearchObject(obj[Key],Number)
}
const object = {
    d: {
        c: {
            b: {
                a: {
                    number: 20,
                    str: 'hi'
                }
            }
        }
    }
}
console.log(SearchObject(object,20))
