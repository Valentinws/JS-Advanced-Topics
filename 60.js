let number = 100
let string = "Jay"
let obj1 = {
    value: "a"
}
let obj2 = {
    value: "b"
}
let obj3 = obj2;


function change(number, string, obj1, obj2) {
    console.log(number)
    number = number * 10;
    console.log(number)
    console.log(string)
    string = "Pete";
    console.log(string)
    console.log(obj1)
    obj1 = obj2;
    console.log(obj1)
    console.log(obj2)
    obj2.value = "c";
    console.log(obj1)
}

change(number, string, obj1, obj2);

//Guess the outputs here before you run the code: 
console.log(number); //100 
console.log(string); //Jay
console.log(obj1.value); // a. Why is not c ??? see below the change2 fn 
console.log(obj2.value); // c

// function change2(number, string, test1, obj2) {
//     //test1 is now our function scope obj1
//     number = number * 10;
//     string = "Pete";
//     test1 = obj2;
//     obj2.value = "c";
//     console.log("obj1:", obj1);    //gloabl scope object
//     console.log("test1:", test1); // function scope object
//     console.log(test1.value)
// }