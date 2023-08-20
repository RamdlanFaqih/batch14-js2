// 1.array.push
// menambah elemen ke array
let nama = ["faqih", "fikri"];
nama.push("isep");
console.log(nama);

// output = [faqih, fikri, isep]

// 2.array.shift
// menghapus elemen pertama dari array 
let alatTulis = ["pulpen", "pensil", "buku"];
let alatTulisPertama = alatTulis.shift();
console.log(alatTulisPertama); // output = "pulpen"
console.log(alatTulis); // output = ["pensil", "buku"]

// 3.array.includes 
// untuk mengecek apakah sebuah array memiliki nilai yang dimasukan dan mengembalikan true atau false sesuai dengan keberadaan nilai tersebut
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3)); // true
console.log(numbers.includes(6)); // false

// 4.string.trim
// menghapus spasi dari kedua ujung sebuah string
const message = '   Hello World!   ';
const trimmedMessage = message.trim();
console.log(trimmedMessage); // 'Hello World!'

// 5. string.toUpperCase
// mengubah semua karakter string menjadi huruf besar
const name = 'Faqih Ramdlan';
const upperCasePesan = message.toUpperCase();
console.log(upperCaseMessage); // 'FAQIH RAMDLAN!'

// 6.string.toLowerCase
// mengubah semua karakter string menjadi huruf kecil
const alamat = 'CIAMIS';
const lowerCaseAlamat = alamat.toLowerCase();
console.log(lowerCaseAlamat); // 'ciamis'

// 7.number.round
// membulatkan integer ke angka terdekat
console.log(Math.round(1.5)); // 2

// 8.number.floor
// membulatkan integer kebawah
console.log(Math.floor(3.95)); // 3

// 9.array.pop
// menghaops element terakhir array dan mengembalikannya
const ruang = ['tamu', 'dapur', 'kamar'];
const ruangAkhir = ruang.pop();
console.log(ruangAkhir); // 'kamar'
console.log(ruang); // ['tamu', 'dapur']

// 10. array.unshift
// menambahkan element ke awal sebuah array dan mengembalikannya
const keluarga = ['Kakak', 'Adik'];
const keluargaBaru = keluarga.unshift('ipar');
console.log(keluargaBaru); // 'ipar'
console.log(keluarga); // ['ipar','tamu', 'dapur']



