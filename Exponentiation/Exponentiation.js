const Exponentiation = (number, exponentiation) => {
    if (typeof number !== "number" || typeof exponentiation !== "number") {
        return "pls enter your number"
    } else {
        if (exponentiation < 2){
            return number
        }
    }
    return Exponentiation(number,exponentiation-1)* number
}

console.log(Exponentiation(2,3))