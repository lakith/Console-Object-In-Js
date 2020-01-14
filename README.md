# Difference between console.dir and console.log :snowflake:

The **console.log()** method prints out a **toString** representation of the object in the console to the user.

Syntax:

```javascript
console.log(object) or console.log("string", object)
```

The **console.dir()** method output the **list of object properties** of a specified object in the console to the user.

Syntax:

```javascript
console.dir(object)
```

In simple words, the **console.log()** returns the object in its **string representation** and **console.dir()** recognizes the object just as an object and outputs its **properties**. Both log() and dir() returns the string just as a string.

## Example 

```javascript
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
}

Person.prototype.nationality = "English";
```


## Adding Properties and Methods to Objects :tada:

Sometimes you want to add new properties (or methods) to all existing objects of a given type.

Sometimes you want to add new properties (or methods) to an object constructor.

### Using the **prototype** Property

The JavaScript prototype property allows you to add new properties to object constructors:

```javascript
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

![output in browser console](https://github.com/lakith/Console-Object-In-Js/blob/master/images/Capture.PNG?raw=true)

![output in cmd](https://github.com/lakith/Console-Object-In-Js/blob/master/images/Capture2.PNG?raw=true)
