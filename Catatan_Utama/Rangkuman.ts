// BERIKUT ADALAH RANGKUMAN DARI TYPESCRIPT 
// Dibawah ini merupakan semua syntax untuk javascript. Lantas apa bedanya dengan TypeScript? 
// Yaitu apabila typescript harus memasukkan jenis tipe datanya seperti contoh dibawah
let R: Number = 2; 
// Sedangkan javascript tidak terlalu perlu karena tidak ada type checking

// Ini sintaks comments di ts dan js

/*
    Bisa juga ini untuk multiple row comments
*/

// Cara membuat variabel 
const A = 1; // Yang ini gabisa diganti nilainya
let B = 2; // Yang ini bisa diganti nilainya

// Ada beberapa tipe data antara lain (dengan catatan gaboleh nama yang 
// sama dengan variabel lain, tidak boleh karakter tertentu, dan tidak boleh diawali angka)
const AA = "Ini String"; // Ini tipe data string
let AB = 101; // Ini tipe data number
const AC = true; // Ini tipe data boolean
const AD = null; // Ini tipe data null
const AE = undefined; // Ini tipe data undefined

// Ini cara menampilkan variabel yang ingin kita tampilkan di terminal
console.log(AA); 

// Ada beberapa cara untuk mengubah jenis variabel antara lain 
const numberAA = Number(AA); // Mengubah dari tipe apapun menjadi number
const intAA = parseInt(AA); // Mengubah dari tipe data string menjadi integer
const flAA = parseFloat(AA); // Mengubah dari tipe data string menjadi float
const str1AB = AB.toString(); // Cara pertama untuk mengubah jenis tipe apapun menjadi string
const str2AB = String(AB); // Cara kedua untuk mengubah menjadi string
const boolAA = Boolean(AA) // Mengubah dari tipe data apapun menjadi boolean

const penjAA_AB = AA + AB; // Mengubah dari tipe apapun menjadi string

// Ada juga macam macam operator seperti 
typeof AA; // Unary operator (mengeluarkan tipe data dari variabel AA)

5 + 4; // Ini binary operator seperti aritmatika
10 / 2; 

(AB > 10); // Ini ternary operator melakukan kondisional 

B = 100; // Ini disebut operator assigment yaitu membuat variabel baru atau lainnya 

B = AB % A; // Ini adalah operator aritmatika modulus
console.log(++B); // Ini adalah increment 
console.log(B++); // Ini juga increment dengan output yang berbeda
console.log(--B); // Ini adalah decrement
console.log(B--); // Ini juga increment dengan output yang berbeda
B = AB**B // Ini adalah operator eksponensial

// 1 == "1"; Ini tidak dapat dilakukan di typescript karena berbeda tipe data
console.log(B == 1); // Ini adalah operator perbandingan 
console.log(B != 1); 
console.log(B === 1); // Ini operator yang harus identik sama dari segi tipe data dan juga isinya
console.log(B > 1); 
console.log(B < 1); 
console.log(B >= 1);
console.log(B <= 1);
console.log(B && 1); // Ini operator AND
console.log(B || 1); // Ini operator OR
console.log(!(B == 1)); // Ini operator NOT
console.log("pertama"+"kedua"); // Ini operator string 

// Selanjutnya kita masuk kedalam membangun sebuah fungsi 

// Contoh cara membuat fungsi pertama 
function tambah(A,B) {
    const jumlah = A + B;
    console.log(jumlah)
}

function hello_world(){
    console.log("Hello World")
}

// Contoh cara membuat fungsi kedua (bedanya adalah menggunakan return sebagai nilainya. 
// Dan apapun setelah return tidak akan dibaca oleh fungsi dan diabaikan )
function kurang(A,B) {
    const kurang = A - B;
    return kurang
}

// atau bisa juga dengan const
const Pagi = function(){
    console.log("Selamat Pagi")
}

// First-Class Citizen (contoh) disini pembedanya yaitu fungsi yang memanggil fungsi lainnya
function multiply(a, b) {
  return a * b;
}
function calculate(operation, numA, numB) {
  return operation(numA, numB);
}
const result = calculate(multiply, 2, 4);
console.log(result);

// Atau bisa juga fungsi yang mengembalikan nilai fungsi lainnya
function multiplier(x) {
  return function (num) {
    return x * num;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10));
console.log(triple(11));

// Arrow Function (tidak memerlukan penulisan function hanya perlu input 
// dan apa output yang ingin dikeluarkan dari fungsi panahnya)
const convertCelsiusToFahrenheitUsingArrowFunction = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};

// Atau yang lebih singkat lagi (contoh)
const convertCelsiusToFahrenheitInConciseSyntax =
  (temperature) => (9 / 5) * temperature + 32;

// Selanjutnya yaitu akan membahas object, set, map, dan array. Apabila tipe data sebelumnya disebut tipe 
// data primitif dan sekarang membahas tipe data yang lebih kompleks

const products = { 
  name: "Sepatu",
  price: 230000, 
  age: 9
}; // Contoh membuat object

console.log(products.name); // Memanggil isi dari objek products
console.log(products["price"]); // Bisa juga dengan bracket kotak
const { age, price } = products; // Contoh memanggil isi dari products dengan object destructuring
console.log(age, price);
products.name = "Meja Belajar"; // Mengganti isi dari object products

delete products.age; // Untuk menghapus isi dari object products
delete products["age"] // Gatau kenapa ini eror

const array = [1,2]; // Contoh membuat array
const users = new Array();
const numbers = new Array(5);

const foo = Array.from("foo"); // Membuat array dari Array.from. Dapat digunakan untuk menyalin array

console.log("ini isi array pertama " + array[1]); // Mengakses array 

array[1] = 10; // Memanipulasi isi array
array.push(76); // Menambahkan 76 ke akhir array sehingga pada kasus ini array memiliki 3 nilai tidak lagi 2

delete array[1] // Menghapus isi array dengan index dari array yang ingin dihapus (namun masih ada elementnya)

array.splice(0,1); // Menghapus isi array beserta elementnya (splice membutuhkan 2 indeks yaitu yang pertama 
// untuk element yang dihapus dan yang kedua berapa jumlah element yang ingin dihapus)

array.shift() // Menghapus element pertama dari array
array.pop() // Menghapus elemnt terakhir dari array

const [first, second] = array; // Array Destructuring
console.log(first); 

array.reverse(); // Membalik urutan element dari array

array.sort(); // Secara default akan mengurutkan dengan ascending

// Selanjutnya yaitu Struktur data dengan Map 

const map = new Map(); // Membuat map dengan menggunakan object map constructor

const productMap = new Map([
  ['shoes', 500],
  ['cap', 350],
  ['jeans', 250]
]); // Contoh dalam mengkonstruksi map 
console.log(productMap); 

const maps = new Map();
maps.set('name', 'aras'); // Menambahkan isi map dengan set dengan input (key, value)
console.log(maps)

console.log(maps.get('name')) // Mengakses isi dari map

productMap.delete('shoes'); // Menghapus nilai dari map

// Selanjutnya yaitu menstrukturkan data dengan set

const set = new Set(); // Struktur dasar untuk membuat set baru 

const mySet = new Set([1,2,3]);
console.log(mySet);

set.add(1);
set.add(2); // Berfungsi untuk menyimpan data kedalam set yang kita punya

for (const number of set) {
  console.log(number); 
} // Untuk memanggil isi dari set 

set.forEach((value) => console.log(value)); // Sama untuk memanggil isi dari set tetapi lebih ringkas

set.delete(1); // Menghapus isi dari set yang kita inginkan. Ingat bahwa set tidak memiliki index

// Selanjutnya yaitu spread operator (dapat digunakan untuk semua jenis object)

const obj1 = { name: 'Digitab'};
const obj2 = { lastName: 'Indonesia', address: 'Bandung'}
const newObj = { ...obj1, ...obj2 }; // Untuk mempersingkat inputan dari sebuah variabel ataupun fungsi

const copiedNewObj = { ...newObj}; // Bisa untuk mencopied fungsi atau variabel dari yang kita buat

// Selanjutnya yaitu Rest Operator 

function myFunc(...name){
  console.log(name.length) // operator panjang array
  console.log('name:', name);
}

myFunc('Fikran','Kei','Faqih','Faiz'); // Dapat menerima input berupa array maupun lainnya 

// Selanjutnya yaitu conditional 
if (A===1) {
  console.log("Benar")
} else if (A>1) {
  console.log("Lebih Besar")
} else {
  console.log("Lebih Kecil")
}; // Pengondisian If, else if, dan else

// Contoh dari ternary operation 
const prices = 100000;
const isMember = true;
const discount = isMember ? 0.1 : 0; // Ini merupakan contoh dari ternary operation if 
// dengan ? dan setelahnya apabila terpenuhi dan setelah titik dua yaitu apabila tidak terpenuhi
console.log(`Anda mendapatkan discount sebesar ${discount * prices}`);

const fruit = 'apple';

switch (fruit) {
  case 'banana':
    console.log('I am a banana.');
    break;
  case 'apple':
    console.log('I am an apple.');
    break;
  case 'orange':
    console.log('I am an orange.');
    break;
  case 'strawberry':
    console.log('I am a strawberry.');
    break;
  default:
    console.log('I am not a fruit. I am a programmer.');
} // contoh penggunaan switch case 

// Selanjutnya masuk ke looping
// For
for (let i=0; i<5; i++) {
  console.log(`berikut adalah angka ${i}`);
}; // For loop

const person = {name:"fikran", origin:"Bandung", birthYear:2004};
for (const properti in person) {
  console.log(`${properti} bernilai ${person[properti]}`);
}; // For in (dimana loop yang bisa dengan menggunakan object maupun lainnya)

const nama = ['fikran','faiz','kei','faqih'];
for (const item of nama) {
  console.log(item)
}

let i = 0; // Jika ingin menggunakan while harus dengan let jangan const karena nilainya akan berubah
while (i<5) {
  console.log(`Berikut adalah angka ${i}`);
  i++;
}; // While (perbedaan utamanya dengan for yaitu jika kita tidak mengetahui ada berapa iterasi maka lakukan dengan while)

do {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
} while (i < 5); // Perbedaan dengan while yaitu dia akan mengecek apa yang harus dilakukan baru di cek kondisinya apakah memenuhi atau tidak

// Ada dua control statement yaitu break dan continue

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
} // Diatas merupakan contoh dari penggunaan break 

for (let i = 0; i < 10; i++) {
  if (i === 5) {
      continue;
  }
  console.log(i);
} // Diatas merupakan contoh dari penggunaan continue

// Selanjutnya kita akan membahas menggenai Error Handling 

throw new Error("Ini Error!"); // Ini merupakan syntax dasar dari pembuatan peringatan error muncul

try {
  console.log('Memulai program');
  console.log('Mengakhiri program');
} catch (err) {
  console.log('Karena tidak ada error, blok ini akan diabaikan');
} finally {
  console.log('Ini finally blok') 
} // Code diatas merupakan contoh dari penerapan try catch dan finally yang secara umum digunakan untuk mencoba membangkitkan error

