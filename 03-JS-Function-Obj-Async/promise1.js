/*
    Tulis code function promise di sini
*/
const myCountPromise = (number) => {
    return new Promise((resolve, reject) => {
        if (number !== undefined) {
            setTimeout(() => {
                resolve(number * 2);
            }, 2000);
        } else {
            reject("Maaf tidak ada nilai dalam parameter");
        }
    });
};

//kode dibawah ini jangan dihapus atau diedit sama sekali ya
myCountPromise(2)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
