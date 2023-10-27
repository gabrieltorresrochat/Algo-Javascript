var a= "Jean"
var b= "Paul"
var result = checkName(a, b)

function checkName(prenom1, prenom2) {
    if(prenom1==prenom2) {
        return"les deux prénoms sont identiques"
    }
    else {
        return"les deux prénoms ne sont pas identiques"
    }  
}
console.log(result)