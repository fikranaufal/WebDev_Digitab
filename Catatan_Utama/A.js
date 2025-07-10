/* Kode awal dari JS
function sumArray(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function getUserName(user) {
  return user.name;
}

function isEven(n) {
  return n % 2 === 0;
}

function getFirstItem(arr) {
  return arr[0];
}
*/
// Kode dalam TS
// 1.
function sumArray(arr) {
    return arr.reduce(function (a, b) { return a + b; }, 0);
}
;
console.log("Jumlah array: ".concat(sumArray([1, 2, 3, 4, 5])));
// 2.
function getUserName(user) {
    return user.name;
}
;
var peserta = {
    name: "Fikran",
    class: "K01",
    age: 21,
    condition: true
};
console.log("name: ".concat(getUserName(peserta)));
// 3. 
function isdecimal(n) {
    return n % 1 !== 0;
}
function isEven(n) {
    if (isdecimal(n)) {
        return "Angka yang dimasukkan harus bilangan bulat";
    }
    return n % 2 === 0;
}
;
console.log("Ganjil: ".concat(isEven(1)));
console.log("Genap: ".concat(isEven(2)));
console.log("desimal: ".concat(isEven(1.4)));
// 4. 
function getFirstItem(arr) {
    return arr[0];
}
;
console.log("Ambil komponen pertama array ".concat(getFirstItem([101, 23, 3, 5, 70])));
