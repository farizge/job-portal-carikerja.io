//Soal 1 ( Membuat Function dengan return String )
function cetakFunction() {
    return "Halo Nama Saya Fariz";
}
console.log(cetakFunction());

//Soal 2 ( Membuat Function dengan rumus penjumlahan didalamnya)
function myFunction(angka1, angka2) {
    return angka1 + angka2;
}
let angka1 = 20;
let angka2 = 7;
let output = myFunction(angka1, angka2);
console.log(output);

//Soal 3 ( Mengubah dalam bentuk arrow function )
const Hello = () => "Hello";
console.log(Hello());

//soal 4 ( mengubah array menjadi object )
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];
let objDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    jenisKelamin: arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    tahunLahir: arrayDaftarPeserta[3],
};
console.log(objDaftarPeserta);

// 5 ( Membuat sebuah array of object dan melakukan filter )
let arrayBuah = [
    { nama: "Nanas", warna: "Kuning", adaBijinya: false, harga: 9000 },
    { nama: "Jeruk", warna: "Oranye", adaBijinya: true, harga: 8000 },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        adaBijinya: true,
        harga: 10000,
    },
    { nama: "Pisang", warna: "Kuning", adaBijinya: false, harga: 5000 },
];
console.log(arrayBuah.filter((buah) => buah.adaBijinya === false));

//Soal 6 ( Destructuring pada Object )
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020,
};
let { name, brand, year } = phone;
console.log(name, brand, year);

//soal 7 ( Spred Operator pada Object )
let dataBukuTambahan = {
    penulis: "john doe",
    tahunTerbit: 2020,
};

let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172,
};

let objOutput = {};

objOutput = { ...dataBukuTambahan, ...buku };

console.log(objOutput);

//soal 8 ( Penggunaan Function dan Object )
let mobil = {
    merk: "bmw",
    color: "red",
    year: 2002,
};

const functionObject = (param) => {
    return param;
};
console.log(functionObject(mobil));
