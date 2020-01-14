var str = "sample Text"
var phone = { 
    brand: "samsung", 
    price: "200,000"
}; 
var numbers = [10, 20, 30]; 
console.log(str); 
console.dir(str); 
console.dir(phone); 
console.log("phone (log) = ", phone); 
console.dir(numbers); 
console.log("numbers (log) = ", numbers); 
  
// Prints only string as dir() takes 
// only one parameter. 
console.dir("numbers (dir) = ", numbers); 