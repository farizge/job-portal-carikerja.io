//Soal 1 (Latihan mebuat variable dan valuenya)
let namaLengkap = "Fariz Ghani Fuad";
console.log(namaLengkap);

//Soal 2 (Latihan penggabungan variable)
let word = "JavaScript";
let second = "is";
let third = "awesome";

let outputGabunganVariable = word + " " + second + " " + third;
console.log(outputGabunganVariable);

//Soal 3 (Latihan Menggunakan Template Literals)
let hello = "Hello ";
let world = "World!!";

let output = `${hello}${world}`;
console.log(output);

//Soal 4 (Latihan Mengubah tipe data)
let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";
let kelilingPersegiPanjang =
    2 * (parseInt(panjangPersegiPanjang) + parseInt(lebarPersegiPanjang));

console.log(kelilingPersegiPanjang);

//Soal 5 (Latihan Mengurai Kalimat)
let sentences = "wah javascript itu keren sekali";

let firstWords = sentences.substring(0, 3);
let secondWords = sentences.substring(4, 14);
let thirdWords = sentences.substring(15, 18);
let fourthWords = sentences.substring(19, 24);
let fifthWords = sentences.substring(25);

console.log("Kata Pertama: " + firstWords);
console.log("Kata Kedua: " + secondWords);
console.log("Kata Ketiga: " + thirdWords);
console.log("Kata Keempat: " + fourthWords);
console.log("Kata Kelima: " + fifthWords);

//Soal 6 (Akses karakter dalam string)
var sentence = "I am going to be React JS Developer";

var exampleFirstWord = sentence[0];
var exampleSecondWord = sentence[2] + sentence[3];
var thirdWord =
    sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];
var fourthWord = sentence[11] + sentence[12];
var fifthWord = sentence[14] + sentence[15];
var sixthWord =
    sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21];
var seventhWord = sentence[23] + sentence[24];
var eighthWord =
    sentence[26] +
    sentence[27] +
    sentence[28] +
    sentence[29] +
    sentence[30] +
    sentence[31] +
    sentence[32] +
    sentence[33] +
    sentence[34];

console.log("First Word: " + exampleFirstWord);
console.log("Second Word: " + exampleSecondWord);
console.log("Third Word: " + thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log("Fifth Word: " + fifthWord);
console.log("Sixth Word: " + sixthWord);
console.log("Seventh Word: " + seventhWord);
console.log("Eighth Word: " + eighthWord);

//soal 7 ( Latihan Mengambil sebuah Kalimat )
let txt = "I can eat bananas all day";
let hasil = txt.slice(10, 18);

console.log(hasil);

//soal 8 ( membuat kondisi sederhana )
var nilaiDoe = 50;
if (nilaiDoe >= 80) {
    console.log("A");
} else if (nilaiDoe >= 70) {
    console.log("B");
} else if (nilaiDoe >= 60) {
    console.log("C");
} else if (nilaiDoe >= 50) {
    console.log("D");
} else if (nilaiDoe < 50) {
    console.log("E");
}

//soal 9 ( conditional tipe tenary operator )
let angka = 2;
angka === 2 ? console.log("angka nya 2") : console.log("bukan angka 2");

//soal 10 ( conditional tipe Switch Case )
var traffic_lights = "red";
switch (traffic_lights) {
    case "red":
        console.log("Berhenti");
        break;
    case "yellow":
        console.log("Hati-Hati");
        break;
    case "green":
        console.log("Berjalan");
        break;
}

//soal 11 ( Membuat Looping sederhana )
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//soal 12 ( Membuat Looping dengan conditional angka ganjil )
for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//soal 13 ( Membuat Looping dengan conditional angka genap )
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//soal 14 ( Mengakses element array )
let array1 = [1, 2, 3, 4, 5, 6];
console.log(array1[5]);

//soal 15 ( Mengurutkan element array )
let array2 = [5, 2, 4, 1, 3, 5];
console.log(array2.sort());

//Soal 16 ( Mengeluarkan element array )
let array3 = [
    "selamat",
    "anda",
    "melakukan",
    "perulangan",
    "array",
    "dengan",
    "for",
];

for (i = 0; i < array3.length; i++) {
    console.log(array3[i]);
}

//Soal 17 ( Mengeluarkan element array dan dengan kondisi )
let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array4.length; i++) {
    if (array4[i] % 2 === 0) {
        console.log(array4[i]);
    }
}

//Soal 18 ( menggabungkan element menjadi string )
let kalimat = ["saya", "sangat", "senang", "belajar", "javascript"];
console.log(kalimat.join(" "));

//soal 19 ( Menambahkan element array )
var sayuran = [];
sayuran.push(
    "Kangkung",
    "Bayam",
    "Buncis",
    "Kubis",
    "Timun",
    "Seledri",
    "Tauge"
);
console.log(sayuran);
