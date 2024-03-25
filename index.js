// Write your solution in this file!//
var customerName='bob'
function upperCaseCustomerName(){
customerName=customerName.toUpperCase()
}
function setBestCustomer (){
     bestCustomer= 'not bob' 
}
setBestCustomer()
console.log(bestCustomer)
function overwriteBestCustomer(){
    bestCustomer= 'maybe bob'
   return bestCustomer
}
overwriteBestCustomer()
console.log(bestCustomer)
const leastFavoriteCustomer = "Elva"
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Joy"
}

