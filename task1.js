// How to compare two JSON have the same properties without order?
//   let obj1 ={name:"Person 1", age:5};
//   let obj2 ={age:5,name:"Person 1"};

// In JSON/Object we can compare the properties that are not in order by using the key(ie., obj1.name = Person 1 )

// We can see the code for the question below ;


let obj1 ={name:"Person 1", age:5};
let obj2 ={age:5,name:"Person 1"};

if (obj1.name === obj2.name){
    console.log("Both the names are same")
}
else{
    console.log("Names are different")
}

if(obj1.age === obj2.age){
    console.log("Both their ages are same")
}
else{
    console.log("Ages are different")
}
