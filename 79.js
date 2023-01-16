//solution 3 ???


//solution 2
const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
    (function (ii) {
        setTimeout(function () {
            console.log('I am at index ' + ii)
        }, 3000)        
    })(i)

}



//solution 1
// const array = [1, 2, 3, 4];
// for (let i = 0; i < array.length; i++) {
//     setTimeout(function () {    
//         console.log('I am at index ' + i)
//     }, 2000)
//     console.log(i)
// }