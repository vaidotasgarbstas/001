function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// for (let aukstas = 0; aukstas < 3; aukstas++) {
//     console.log('Afrika');
// }

// for (let aukstas = 0; aukstas < 3; aukstas++) {
//     console.log('Aukstas: ', aukstas);
// }

// let kibiras = 0;
// for (let i = 0; i < 20; i++) {
//     let siuksliu = rand(5, 105);
//     kibiras += siuksliu; // kibiras=kibiras + siuksliu;
// }
// console.log(kibiras);

// let kibiras = "";
// for (let i = 0; i < 1000; i++) {
//     let zvaig = "*";
//     kibiras += zvaig;
// }
// console.log(kibiras);

// let kibiras2 = 0;
// let kiek = 0;
// for (let i = 0; i < 20; i++) {
//     let siuksliu = rand(5, 105);
//     if (siuksliu > 50) {
//         kibiras2 += siuksliu;
//         kiek++
//     }
// }
// console.log(kibiras2);
// console.log("Kiek aukstu: " + kiek)


// let kibiras3 = 0;
// let kiek = 0;
// for (let i = 0; i < 20; i++) {
//     let siuksliu = rand(5, 105);
//     if (siuksliu > 50) {
//         kibiras3 += siuksliu;
//         kiek++
//     }
// }
// console.log(kibiras3);
// console.log("Kiek aukstu: " + kiek)


// let kibirasBlue = 0;
// let kibirasGreen = 0;

// for (let i = 0; i < 20; i++) {
//     let siuksliu = rand(5, 105);
//     if (i % 2 == 0) {
//         kibirasBlue += siuksliu;
//     } else {
//         kibirasGreen += siuksliu;
//     }
// }
// console.log(kibirasBlue, kibirasGreen);


let kibiras = 0;
for (let i = 0; i < 20; i++) {
    let siuksliu = rand(5, 105);
    if (kibiras + siuksliu > 500) {
        break;
    } else {
        kibiras += siuksliu;
    }
}
console.log(kibiras);
