// // const square = function (x) {
// //     return x * x;
// // };
// //
// // // const squareArrow = (x) => {
// // //     return x * x;
// // // };
// //
// // const squareArrow = (x) => x * x;
// //
// // console.log(squareArrow(9));
//
// const Name = 'Michelle Obama';
// //
// // const getFirstName = (x) => {
// //     return x.split(' ')[0];
// // };
//
// const getFirstName = (x) => x.split(' ')[0];
//
// console.log(getFirstName(Name));

//arguments object  - no longer bound with arrow functions
//
// const add = (a,b) => {
//     console.log(arguments);
//     return a + b;
// };
//
// console.log(add(55,1));

// this keyword - no longer bound

// const user = {
//     name: 'Kristina',
//     cities: ['Los Angeles', 'Portland'],
//     printPlacesLived() {
//         return this.cities.map((city) => this.name + ' has lived in ' + city);
//     }
// }
//
// console.log(user.printPlacesLived());


const multiplier = {
    numbers: [1,2,3,4],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }

};

console.log(multiplier.multiply());
