const { resolve } = require("mongodb/lib/core/topologies/read_preference");

// console.log("Jack Ma maslahatlari!")
const list = [
    "yaxshi talaba bo'ling", // 0-20
    "togri boshliq tanlang va koproq xato qiling", //20-30
    "ozingizga ishlashni boshlang", // 30-40
    "siz kuchli bolgan narsalarni qiling", // 40-50
    "yoshlarga investitsiya qiling", // 50-60
    "endi dam oling, foydasi yoq endi", // 60
]

// CALLBACK function

// function maslahatBering (a, callback) {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         callback(null, list[5]);
//         // setInterval(function () {
//         //     callback(null, list[5]);
//         // }, 1000);
//     }

// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//     if(err) console.log("Error: ", err);
//     else {
//         console.log('jvob: ', data)
//     }
// })
// console.log("passed here 1");

// ASYNC function

// async function maslahatBering (a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000)
//         })
//     }

// }

// call via then/catch

// console.log("passed here 0");
// maslahatBering(25).then(data => {
//     console.log('javob: ', data);
// }).catch(err => {
//     console.log('Error: ', err);
// })
// console.log("passed here: 1");

// call via asyn/await

// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(80);
//     console.log(javob);
//     javob = await maslahatBering(40);
//     console.log(javob);
// }
// run();

// A-TASK

// const countLetter = (letter, word) => {
//     let count = 0;
//     for(let i=0; i < word.length; i++){
//         if (letter == word[i]) {
//             count += 1;
//         }
//     }
//     return count;
// }
// const result = countLetter('A','Amira');
// console.log(result);

// A-TASK async function

// async function countLetter(letter, word) {
//     if(typeof letter !== 'string' && word !== 'string') throw new Error("Insert a string to function!");
//     else {
//         let count = 0;
//         for(let i = 0; i <= word.length; i++ ) {
//             if( letter.toLowerCase() == word.charAt(i).toLowerCase()) {
//                 count +=1;
//             }
//         }
//         return `${letter} letter: ${count} times returned!`;
//     }   
// }

// Call via then/catch

// countLetter('e', 'Engineer').then( data => {
//     console.log('Count of letter: ', data)
// }).catch( err => {
//     console.log('Error: ', err)
// });

// Call via asyn/await

// async function run() {
//     let result = await countLetter('E','Engineer');
//     console.log(result);
//     result = await countLetter('A','Mashaqqat izlagan talabalar!');
//     console.log(result);
//     result = await countLetter('w','We are gonna build a new future!');
//     console.log(result);
// }
// run();

// function countDigits(word) {
//     return new Promise ((resolve, reject) => {
//         if(typeof word !== 'string') reject('Insert a string value, please!');
//         else{
//             let count = 0;
//             const digits = '1234567890';
//             for(let i=0; i < word.length; i++) {
//                if(digits.includes(word.charAt(i)) == true) {
//                 count += 1
//                }
//             }
//             resolve(`Berilgan stringda ${count} ta digit mavjud!`);
//         }
//     })
// }

// countDigits('ad2a54y79wet0sfgb9').then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// C-TASK

function checkContent (content1, content2) {
    checkList = [];
    if(content1.length >= content2.lewngth){
        for (let i=0; i <= content1.length; i++){
            if(content2.includes(content1.charAt(i))){
                checkList.push(true);
            }
            else{
                checkList.push(false);
            }
        }
    }
    else{
        for (let i=0; i <= content2.length; i++){
            if(content1.includes(content2.charAt(i))){
                checkList.push(true);
            }
            else{
                checkList.push(false);
            }
        }
    }
    return checkList.every((a) => {
        if(a==true) return true;
        else return false;
    })
}

const result = checkContent("abcd", "cdba");
console.log(result);