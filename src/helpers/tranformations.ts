

const numbers = [1,2,3,4,5]

export function add (){
    return numbers.reduce((acc, num)=>{
    return acc + num
},0)
}

//expected result would be 15

//product of numbers

export function product(){ 
    return numbers.reduce((acc,num)=>{
return acc * num
},1)}
 // Output: 120

//  To flatten a nested array:
 const nestedArray = [[1, 2, 3], [4, 5], [6]];
export function nestedData() {
 return nestedArray.reduce((acc,arr)=>{
    return acc.concat(arr)
},[])
}
// Output: [1, 2, 3, 4, 5, 6]

//To count the occurrences of each element in an array:
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
export function counts(){
return fruits.reduce((acc:any,fruit)=>{
if(acc[fruit]){
   acc[fruit]++
}else{
    acc[fruit] =1
}
return acc; 
},{})
}

// Grouping Objects by Property


// module.exports = {addNumbers:add, productsNumbers:product, nestedArray:result, counts:counts}