// String adalah kumpulan character
var sentences = "Hello World";
console.log(sentences[0]);
console.log(sentences[4]);

///// String Properties
// .length
var sentences = "Javascript Language";
console.log(sentences.length);

/// String Methods
// .charAt([indeks])
console.log("Belajar Javascript".charAt(3));

// .concat([indeks])
var str1 = "Good";
var str2 = "Morning";
console.log(str1.concat(str2));

var first_name = "Arief Rachman";
var last_name = "Hakim";
console.log(first_name.concat(" ", last_name)); //tambah space

// .indexOf
var text = "I am Arief";
console.log(text.indexOf("am"));

// .substring([indeks awal], [indeks akhir])
var text1 = "Hallo Dunia";
var new_text1 = text1.substring(0, 5);
console.log(new_text1);

// .toUpperCase()
var greeting = "Hallo, Arief";
console.log(greeting.toLocaleUpperCase());

// .toLowerCase()
var greeting = "Hallo, Arief";
console.log(greeting.toLowerCase());

// .trim()
var username = " ariefhzx ";
var new_username = username.trim();
console.log(new_username);

///// Mengubah Tipe data dari dan ke String
/// String
var number = 12.5;
var arr = [6, 7, 8];
var strNumber = String(number);
var strArr = String(arr);

console.log(strNumber);
console.log(strArr);

// .toString()
var number = 25;
var strNumber = number.toString();
console.log(strNumber);

// Number([String])
var number = "67";
var intNumber = Number(number);
console.log(intNumber);

// .parseInt([String]) & parseFloat([String])
var strNumber = 27.9;
var psrInt = parseInt(strNumber);
var psrFloat = parseFloat(strNumber);

console.log(psrInt);
console.log(psrFloat);
