var hobbies = ['makan', 'ngoding', 'gaming']
console.log(hobbies);
console.log(`Panjang Array ${hobbies.length}`);
console.log(`elemen pertama ${hobbies[0]}`);
console.log(`elemen terakhir ${hobbies.length - 1}`);


/////Method Array

/// .push()
var number = [1,2,3,4,5]
number.push(6)
console.log(number);

/// .pop()
var number = [1,2,3,4,5]
number.pop()
console.log(number);

/// .unshift()
var number = [1,2,3,4,5]
number.unshift()
console.log(number);

/// .shift()
var number = [1,2,3,4,5]
number.shift()
console.log(number);

/// .sort()
var number = [1,2,3,4,5]
number.sort((a,b)=>{return a - b})
console.log(number);

var number = [1,2,3,4,5]
number.sort((a,b)=>{return b -a})
console.log(number);


