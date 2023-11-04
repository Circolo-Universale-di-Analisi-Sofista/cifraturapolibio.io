let mat = [
    ["A", "B", "C", "D", "E"],
    ["F", "G", "H", "IJ", "K"],
    ["L", "M", "N", "O", "P"],
    ["Q", "R", "S", "T", "U"],
    ["V", "W", "X", "Y", "Z"]
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
        res += (num % 5 + 1) //row
        res += Math.trunc(num / 5) + 1 //column
    }
    return res
}

let encoded = document.getElementById("encoded")
let decoded = document.getElementById("decoded")

encoded.oninput = (e) => {
    if(!e.currentTarget) {
        decoded.value = ""
    }
    decoded.value = decode(e.currentTarget.value)
}

decoded.oninput = (e) => {
    if(!e.currentTarget) {
        encoded.value = ""
    }
    encoded.value = encode(e.currentTarget.value)
}