let arr1 = []
let number = 0
const HowManyInteger = (arr) => {
    arr1 = []
    if (typeof arr !== "object") {
        return "pls enter your object arr"
    }
    if (arr.length === 0) {
        return number
    }
    for (let item of arr) {
        if (typeof item === 'object'){
            arr1 = [...arr1,...item]
        }
        if (typeof item === 'number'){
            number++
        }
    }
    return HowManyInteger(arr1)
}

console.log(HowManyInteger([[[5],3],0,2,['foo1'],[],[4,[5,1,6,0]],1]))






