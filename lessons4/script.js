//CONDİTİONALS:KOSULLAR
/*
-Farklı kosullarla baglı olarak karar vermede kullanırız
if
if else
if else if else
switch
ternary operator
*/
/*
IF

if(condition){
    statement1
}

let num =3
if (num >0){
    console.log(´${num} is a positive number´)
}
let isRaining = true
if(isRaining){
    console.log('Remember to take rain coat')
}
*IF ELSE
if(condition){
//kocul dogru ise bura calısır
}else{
//yanlıs ise buradaki kod blogu calısır
}
let num = 3
if(num > 0){
    console.log(´${num} is a positive number´)
}else{
    console.log(´${num} is a negative number´)
}
let num = -3
if ( num > 0){
    console.log(´${num} is a positive number´)
}else{
    console.log(´${num} is a negative number´)
}
 
let result = prompt('2+5 kac yapar ?','2+5')
if( result ==='7'){
    console.log('true answer')
}else{
    console.log('false answer')
}
let isRaining = true
if(isRaining){
    console.log("you need a rain coat")
}else{
    console.log("no need for a rain coat")
}
isRaining = false
if(isRaining){
    console.log("you need a rain coat")
}else{
    console.log("No need for a rain coat")
}
*If else If else
-birden fazla kosula ihtiyacımız olursa istersek kullanırız
if(condition){
    //code
}else if (condition){
    //code
}else{
    //code
}
let number = 5
if(number ===4){
    console.log("")
}else if(number => 5){
    console.log("")

}else if(number > 5){
    console.log("")

}else{
    console.log("")

}
let a = 0
if(a > 0){
    console.log(´${a} is a positive number´)
}else if{
    console.log(´${a} is a negative number´)
}else if {
    console.log(´${a} is zero´)
}else{
    console.log(´${a} is not a number´)
}

let weather= 'sunny'
if(weather ==='rainy'){
    console.log('You need a rain coat)
}else if(weather ==='cloudy'){
    console.log('It night be cold , you need a jacket')
}else if (weather === 'sunny'){
    console.log('Go out freely')
}else{
    console.log('No need for rain coat')
}
*SWİTCH:

switch(caseValue){-durumun degeri
    case 1:durum buysa 
        //codebu kodu calıstır
        break ve durdur
    case 2: buysa
        //code -bunu
        break
    case3:
        //code
        break
    default:-
        //code

        **break: eger o satırda yazdıgımız kod ise calismasını istediğimiz o kodu calistirir ve digerlerine baktırmaz
        ** default:else gibidir hic bir code blogumuz calismazsa bu calisir 
    }
let weather = 'cloudy'
switch(weather){
    case 'rainy':
        console.log('You neeed a rain coat')
        break
    case 'cloudy':
        console.log('It night be cold , you need a jacket')
        break
    case 'sunny':
        console.log('Go out freely')
        break
    default:
        console.log('No need for rain coat')
}

let dayUserInput = prompt('What day is today')
let day = dayUserInput.toLowerCase()

switch(day){
    case 'monday':
        console.log('Today is Monday')
        break
    case 'tuesday:
        console.log('Today is Tuesday')
        break
    case 'wednesday':
        console.log('Today is Wednesday')
        break
    case 'thursday':
        console.log('Today is Thursday')
        break
    case 'friday':
        console.log('Today is Friday')
        break
    case'saturday':
        console.log('Today is Saturday')
        break
    case'sunday':
        console.log('Today is Sunday')
        break
    default:
        console.log('It is not week day')
        
}
!TERNARY OPERATORS:

let isRaining = true
isRunning
? console.log('You need a rain coat')
: console.log('No need for a rain coat')

*/
//! MORE examples
/*
1-
let age = prompt("what is your age: ")

if( age >=18){
    comsole.log("you can get a driver's license")
}else{
    console.log("to get your license" + (18 - yas)+"you have to wait a year.")
}
2-
let myAge= prompt("Enter your age: ")
let yourAge = prompt("Enter your age: ")

if(yourAge > myAge){
    console.log("Benim yasim"+ myAge + "Sizi benden"+ (yourAge-myAge) +"Daha büyüksünüz");
}else{
    console.log("Benim yasim" + myAge +"Ben sizden"+ (myAge-yourAge) +"Daha büyügüm")

}
3-
let a = prompt("bir a degeri giriniz: ")
let b = prompt("bir b degeri giriniz: ")

if(a > b){
    console.log(a + ", "+b + "' den büyüktür")
}else{
    console.log(a +", "+b +"' den kücük")
}

console.log(a>b ? ", "+b + "'den büyüktür" : a +", "+ b +"'den kücük")

4-
let sayi = prompt("bir sayi giriniz: ")
if(sayi % 2 ==0){
    console.log(sayi +" bir cift sayidir")
}else {
    console.log(sayi +"tek bir sayidir")
}
5-
let puan = prompt("Puaninizi giriniz: ")

if( puan >= 80 && puan <=100){
    console.log("Notunuz : A")
}else if( puan >=70 && puan <80){
    console.log("Notunuz : B")
}else if( puan >=60 && puan<70){
    console.log("Notunuz : C")
}else if( puan >=50 && puan < 60){
    console.log("Notunuz :D")
}else if(puan >=40 && puan <50){
    console.log("Notunuz : E")
}else if(puan >=0 && puan <50){
    console.log("Notunuz : F")
}else{
    console.log("Gecerli bir not giriniz")
}
6-
let ay= prompt("Ayı giriniz : ").toLowerCase()

switch(ay){
    case'eylül':
    case'ekim':
    case'kasım':
        console.log("Mevsim Sonbahar")
        break;
    case'aralık':
    case 'ocak':
    case 'subat':
        console.log("Mevsim kıs")
        break;
    case 'mart':
    case 'nisan':
    case 'mayıs':
        console.log("Mevsim İlkbahar")
        break;
    case'haziran':
    case 'temmuz':
    case 'agustos':
        console.log("Mevsim yaz")
        break;
    default:
        console.log("Gecerli bir ay giriniz")
}
7-
let day = prompt("Bugün hangi gün: ").toLowerCase()

switch(day){
    case 'pazartesi':
    case'salı':
    case'carsamba':
    case'perşembe':
    case'cuma':
       console.log(day.charAt(0).toUpperCase()+day.slice(1)+" bir is günüdür")
       break;
    case'cumartesi':
    case'pazar':
        console.log(day.charAt(0).toUpperCase()+day.slice(1)+ "HAFTASONUU")
        break;
    default:
        console.log("Gecerli bir gün giriniz")

    }

    8-
    let ay = prompt("Bir ay girin:").toLowerCase();
let yil = prompt("Bir yıl girin:");

let ayNumarasi;
switch (ay) {
    case 'ocak': ayNumarasi = 0; break;
    case 'şubat': ayNumarasi = 1; break;
    case 'mart': ayNumarasi = 2; break;
    case 'nisan': ayNumarasi = 3; break;
    case 'mayıs': ayNumarasi = 4; break;
    case 'haziran': ayNumarasi = 5; break;
    case 'temmuz': ayNumarasi = 6; break;
    case 'ağustos': ayNumarasi = 7; break;
    case 'eylül': ayNumarasi = 8; break;
    case 'ekim': ayNumarasi = 9; break;
    case 'kasım': ayNumarasi = 10; break;
    case 'aralık': ayNumarasi = 11; break;
    default: console.log("Geçerli bir ay girin."); return;
}

let tarih = new Date(yil, ayNumarasi + 1, 0);
console.log(ay.charAt(0).toUpperCase() + ay.slice(1) + " ayı " + tarih.getDate() + " gündür.");

9-
let ay = prompt("Bir ay girin:").toLowerCase();

switch (ay) {
    case 'ocak':
    case 'mart':
    case 'mayıs':
    case 'temmuz':
    case 'ağustos':
    case 'ekim':
    case 'aralık':
        console.log(ay.charAt(0).toUpperCase() + ay.slice(1) + " ayı 31 gündür.");
        break;
    case 'nisan':
    case 'haziran':
    case 'eylül':
    case 'kasım':
        console.log(ay.charAt(0).toUpperCase() + ay.slice(1) + " ayı 30 gündür.");
        break;
    case 'şubat':
        console.log(ay.charAt(0).toUpperCase() + ay.slice(1) + " ayı 28 gündür.");
        break;
    default:
        console.log("Geçerli bir ay girin.");
}
*/


