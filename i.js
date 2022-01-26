function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let kauliukas;
let kiek = 0;
do {
    kauliukas = rand(1, 6);
    console.log(kauliukas);
    kiek++
} while (kauliukas != 2 && kauliukas != 5);
console.log("Kauliukas ismestas " + kiek + " kartus")
