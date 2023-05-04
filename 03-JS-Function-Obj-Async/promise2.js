function filterBooksPromise(colorful, amountOfPage) {
    return new Promise(function (resolve, reject) {
        var books = [
            { name: "shinchan", totalPage: 50, isColorful: true },
            { name: "Kalkulus", totalPage: 250, isColorful: false },
            { name: "doraemon", totalPage: 40, isColorful: true },
            { name: "algoritma", totalPage: 250, isColorful: false },
        ];
        if (amountOfPage >= 40) {
            resolve(
                books.filter(
                    (x) =>
                        x.totalPage >= amountOfPage && x.isColorful == colorful
                )
            );
        } else {
            var reason = "Maaf buku di bawah 40 halaman tidak tersedia";
            reject(reason);
        }
    });
}

// jalankan function promisenya disini ( wajib menggunakan async/await )
const execute = async (colorful, amountOfPage) => {
    try {
        const result = await filterBooksPromise(colorful, amountOfPage);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

//bukunya berwarna dan jumlah halamannya 40
execute(true, 40);
//bukunya tidak berwarna dan jumlah halamannya 250
execute(false, 250);
//bukunya berwarna dan jumlah halamannya 30
execute(true, 30);
