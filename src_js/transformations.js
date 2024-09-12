
const numbers = [1,2,3,4,5]

const add = numbers.reduce((acc, num)=>{
    return acc + num
},0)

//expected result would be 15

//product of numbers

const product =  numbers.reduce((acc,num)=>{
return acc * num
},1)
 // Output: 120

//  To flatten a nested array:
 const nestedArray = [[1, 2, 3], [4, 5], [6]];
const result = nestedArray.reduce((acc,arr)=>{
    return acc.concat(arr)
},[])
// Output: [1, 2, 3, 4, 5, 6]

//To count the occurrences of each element in an array:
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
const counts =  fruits.reduce((acc,fruit)=>{
if(acc[fruit]){
   acc[fruit]++
}else{
    acc[fruit] =1
}
return acc;
},{})

// Grouping Objects by Property

module.exports = {addNumbers:add, productsNumbers:product, nestedArray:result, counts:counts}