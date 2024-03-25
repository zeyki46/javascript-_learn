//BOOLEANS

let isLightOn=true
let isRaining=false
let isHungry=false
let isMarried=true
let trueValue=4 > 3 //true
let falseValue=4 < 3//false

//OPERATORS
//Assigment Operators:atama operatörü

let firstName='akif'
let country='Turkey'

/*
= x=y
+= x+=y  x=x+y
-= x-=y x=x-y
*= x*=y x=x*y
/= x/=y x=x/y
%= x%=y x=x%y
**= x**=y x=x**y
*/

//ARİTHMETİC OPERATORS
/*
-ADDİTİON(+)=A+B
-SUBSTRACTION(-)=A-B
-MULTIPLICATION(*)=A*B
-DIVISION(/)=A/B
-MODULUS(%)=A%B  
-EXPONENTIATION(**)=A**B
*/

let numOne = 4
let numTwo = 3

let sum = numOne+numTwo
let diff = numOne-numTwo
let mult=numOne*numTwo
let div=numOne/ numTwo
let reminder = numOne%numTwo
let powerOf= numOne**numTwo
console.log(sum ,diff,mult,div,reminder,powerOf)


//COMPARISON OPERATORS karsilastirma 
/*
== sadece değerine bakar aşkısı
=== hem değerin hem veri türünün aynı olup olmadıgına bakar
!= esit degilse // 5 != '5' false döner cünkü 5 5'e esittir deger olarak
>
<
<=
=>

 */
// // Logical Operators--> Mantıksal operatörler
// //&&->ampersand operator = ve an
// const check =4>3 && 10 > 5 // true && true-> true
// const check =4 > 3 && 10 < 5 // true&& false -> false
// const check = 4 <3 && 10 < 5 // false&& false -> false
// //||--> pipe or operator veya or 

// const check = 4 > 3 || 10 > 5 // true || true -> true
// const check= 4 > 3 || 10 < 5 // true || false -> true
// const check=4 <3 || 10 <5 // false|| false -> false


// // and!(negation)
// let check = 4>3//true
// let check = !(4>3) //false
// let isLightOn= true
// let isLightOff= !isLightOn//false

//INCREMENT OPERATOR: artırma operatoru
/*
1- Pre-increment:önceden artırmalı
let count =0
console.log(++count)//1
console.log(count)//1
2- Post-increment:sonradan artırmalı
let count = 0
console.log(count++)//0
console.log(count)//1
*/
// Derement Operator:Azaltma operatoru
/*
1-pre-decrement:
let count = 
console.log(--count)//-1
console.log(count)//-1
2-post-decrement:
let count=0
console.log(--count)//0
console.log(count)//-1

*/
//TERNARY OPERATORS
/*
--kosul yazar tek satırlık kosullar gibi düsünebiliriz
let isRaining= true
isRaining
? console.log('you need a rain coat')
: console.log('No nedd for a rain coat')
isRaining= false

isRaining 
?console.log('You need a rain coat.')
:console.log('No need for a rain coat.')
*/
//OPERATORS PRECENDENCE operatör önceligi  

//WINDOW METHODS
/*
-Alert():
alert(message)

alert('Welcome to 30DaysOfJavascript ')

--prompt():userdan bir input almak icin kullanırız
prompt('required text','optional text')

let number = prompt('Enter number','number goes here')
console.log(number)

--CONFİRM
confirm():onay kutusu
-tamam denirse true dönecektir
-iptal dersek false donecektir
-
const agree = confirm('Are you sure you like to delete')
console.log(agree)//
*/
/*DATA OBJECT */
/*
connst date= new Date()
console.log(date)//suanki tarigi verir

date.getFullYear()
date.getMonth()
date.getDate()
date.getHours()
date.getMinutes()
date.Time()
date.Day()

const now = new Date()
const year = now.getFullYear()
const month=now.getMonth()
const date = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()

console.log(´${date}/${month}/${year}/${hours}:${minutes}:${minutes}:${second}´)

const date = new Date()

let year = date.getFullYear(),
    month = date.getMonth,
    day=date.getDate(),
    hour = date.getHour(),
    minute = date.getMinute()
    second = date.getSecond()


let months=[
    'january', 
    'february', 
    'march', 
    'april', 
    'may', 
    'jun', 
    'jul',
    'august',
    'september',
    'october',
    'november',
    'december'
]
let days=[
    'sunday'
 ,'monday'
,'tuesday'
,'wednesday'
,'thursday',
'friday',
'saturday'
]
let humanReadableDate=´${day}, ${months[month]},${days[dayNumber]},${hour}´
console.log(humanReadableDate)
*/

/*
! more exercise
1-veri tiplerini kontrol etme TYPEOF
firstName = "Ahmet";
let lastName = "Yılmaz";
let country = "TR";
let city = "İstanbul";
let age = 30;
let isMarried = true;
let year = 2023;

console.log(typeof firstName);  // string
console.log(typeof lastName);   // string
console.log(typeof country);    // string
console.log(typeof city);       // string
console.log(typeof age);        // number
console.log(typeof isMarried);  // boolean
console.log(typeof year);       // number 


2-10 10 ' a esitmi hem deger hem tip olarak
console.log(typeof '10' === typeof 10); // false


3- boolean ile kontrol yapma
console.log(4 > 3);     // true
console.log(4 >= 3);    // true
console.log(4 < 3);     // false
console.log(4 <= 3);    // false
console.log(4 == 4);    // true
console.log(4 === 4);   // true
console.log(4 != 4);    // false
console.log(4 !== 4);   // false
console.log(4 != '4');  // false
console.log(4 == '4');  // true
console.log(4 === '4'); // false
console.log('python'.length != 'jargon'.length); // true

4-date
let now = new Date();

console.log(now.getFullYear());               // Bugünün yılı
console.log(now.getMonth() + 1);              // Bugünün ay numarası (getMonth() 0 tabanlıdır)
console.log(now.getDate());                   // Bugünün tarihi
console.log(now.getDay());                    // Bugünün hafta numarası
console.log(now.getHours());                  // Şu anki saat
console.log(now.getMinutes());                // Şu anki dakika
console.log(Math.floor(now.getTime() / 1000)); // 1 Ocak 1970'ten şu ana kadar geçen saniye sayısı

! more exercise level 2
1- kullanıcıdan üçgenin tabanını ve yüksekligini girmesini isteyin
let base = parseFloat(promtp("enter the base  : "))
let height = parseFloat(promtp(" enter the height : "))
let area = 0.5 *base * height 
console.log("ücgrnin alanı ${area}")


2-
let sideA = parseFloat(prompt(" enter a side : "))
let sideB = parseFloat(prompt(" enter b side: "))
let sideC= parseFloat(prompt("enter c side: "))

let perimeter = sideA + sideB + sideC
console.log("ücgeninn cevresi : ${perimeter}")

3-
let length = parseFloat(prompt("Uzunluğu girin: "));
let width = parseFloat(prompt("Genişliği girin: "));
let area = length * width;
let perimeter = 2 * (length + width);
console.log(`Dikdörtgenin alanı ${area}, çevresi ${perimeter}`);

4-
let radius = parseFloat(prompt("Yarıçapı girin: "));
let area = Math.PI * radius * radius;
let circumference = 2 * Math.PI * radius;
console.log(`Çemberin alanı ${area}, çevresi ${circumference}`);

5-
let slope = 2; // m
let x_intercept = 1; // c / m
let y_intercept = -2; // c
console.log(`Eğim: ${slope}, x-kesim noktası: ${x_intercept}, y-kesim noktası: ${y_intercept}`);

6-
let hours = parseFloat(prompt("Saat sayısını girin: "));
let rate = parseFloat(prompt("Saat başına ücreti girin: "));
let pay = hours * rate;
console.log(`Haftalık kazancınız ${pay}`);

7-
let myAge = 250;
let yourAge = 25;
let message = `Ben sizden ${myAge - yourAge} yıl daha yaşlıyım.`;
console.log(message);
8-
let birthYear = parseInt(prompt("Doğum yılınızı girin: "));
let age = new Date().getFullYear() - birthYear;
let message = (age >= 18) ? `Siz ${age} yaşındasınız. Araba kullanabilirsiniz.` : `Siz ${age} yaşındasınız. Araba kullanabilmek için ${18 - age} yıl beklemeniz gerekiyor.`;
console.log(message);
9-
let years = parseFloat(prompt("Kaç yıl yaşadınız: "));
let seconds = years * 365 * 24 * 60 * 60;
console.log(`Sen ${seconds} saniye yaşadın.`);

10-

let now = new Date();

let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();
let hour = now.getHours();
let minute = now.getMinutes();

console.log(`YYYY-MM-DD HH:mm: ${year}-${month}-${day} ${hour}:${minute}`);
console.log(`DD-MM-YYYY HH:mm: ${day}-${month}-${year} ${hour}:${minute}`);
console.log(`DD/MM/YYYY HH:mm: ${day}/${month}/${year} ${hour}:${minute}`);

11-
let now = new Date();

let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, '0'); // ayı 2 basamaklı hale getirir
let day = String(now.getDate()).padStart(2, '0'); // günü 2 basamaklı hale getirir
let hour = String(now.getHours()).padStart(2, '0'); // saati 2 basamaklı hale getirir
let minute = String(now.getMinutes()).padStart(2, '0'); // dakikayı 2 basamaklı hale getirir

console.log(`YYYY-MM-DD HH:mm: ${year}-${month}-${day} ${hour}:${minute}`);



*/
