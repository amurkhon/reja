console.log("Jack Ma maslahatlari!")
const list = [
    "yaxshi talaba bo'ling", // 0-20
    "togri boshliq tanlang va koproq xato qiling", //20-30
    "ozingizga ishlashni boshlang", // 30-40
    "siz kuchli bolgan narsalarni qiling", // 40-50
    "yoshlarga investitsiya qiling", // 50-60
    "endi dam oling, foydasi yoq endi", // 60
]

// CALLBACK function

function maslahatBering (a, callback) {
    if (typeof a !== "number") callback("insert a number", null);
    else if (a <= 20) callback(null, list[0]);
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else {
        setInterval(function () {
            callback(null, list[5]);
        }, 1000);
    }

}

console.log("passed here 0");
maslahatBering(65, (err, data) => {
    if(err) console.log("Error: ", err);
    else {
        console.log('jvob: ', data)
    }
})
console.log("passed here 1");

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