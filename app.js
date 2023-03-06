'use strict';

const operator = document.querySelectorAll(".operator");

const inputs = document.querySelectorAll('input');

[].forEach.call(inputs, function (input) {
    return  input.addEventListener('onClick', () => {
        if (input == '×') {
            input.value = '*'
            console.log("Worked");
        }
        
    })
});

console.log(inputs);

// [].forEach.call(operator, function (sign) {
//     sign.addEventListener('click', () => {
//         console.log("Sign clicked")
//         if (operator.value == '×') {
//             operator.value == '*';
//         }
//     })
// });

