let mat = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "i", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"]
]

function decode(code){
    let res = ""
    for(let i = 0; i < code.length-1; i+=2){
        res += mat[code[i]-1][code[i+1]-1]
    }
    return res;
}

function encode(code){
    let res = ""
    for(let char of code){
        let num = (char.charCodeAt(0))-("a".charCodeAt(0))
        if(num > 8) {
            num -= 1
        }
        res += Math.trunc(num / 5) + 1 //row
        res += num % 5 + 1 //column
    }
    return res
}

let encoded = document.getElementById("encoded")
let decoded = document.getElementById("decoded")

function onInput(val, fun) {
    return (e) => {
        if(!e.currentTarget) {
            val.value = ""
        }
        val.value = fun(e.currentTarget.value)
    }
}

encoded.oninput = onInput(decoded, decode)

decoded.oninput = onInput(encoded, encode)

//test code
/* function check(code, eq=code){
    return decode(encode(code)) == eq
}

if(    !check("abcdefghiklmnopqrstuvwxyz")
    || !check("j", "i") ){
    console.log("the algorithm is incorrect")
} */
