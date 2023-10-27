let student = {
    name: "Gabriel",
    favoritefood: "pizza",
    city: "Paris"
}
let result= 0

let values = Object.values(student)
values.forEach(function(value){
    result += value.length
})
console.log(result)
if (result % 2 == 0) {
    console.log("pair")
}
else {
    console.log("impair")
}
