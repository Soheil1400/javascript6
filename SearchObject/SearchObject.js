let Key
const SearchObject = (obj,Number) => {
    if (typeof obj !== "object") {
        return "pls enter your object arr"
    }
    for (let key in obj) {
        Key = `${key}`
        if (typeof obj[Key] === 'number'){
            let Result = obj[Key] === Number ? 'true' : 'false'
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
                    num: 20,
                    str: 'hi'
                }
            }
        }
    }
}
console.log(SearchObject(object,20))
console.log(SearchObject(object,21))



