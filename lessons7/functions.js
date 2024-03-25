/*
->fonksiyon belirli bir görevi yerine getirmek icin tasarlanmıs 
yeniden kullanılabir bir kod blogu
geriye deger döndürürler

call: functionu direkt cağırmak
invoke:dolaylı yoldan caliştirmak demek

fonksiyon tanımlamaları:

1-Declaration function
2-Expression function
3-Anonymous function
4-Arrow function

1->DECLARATION FUNCTION
-
funciton sayHello(){
    console.log("hello")
}
sayHello()

*FUNCTİON with a parametre
function functionName(param1){
    //code goes her
}
function areaOfCircler(r){
    let area = Math.PI*r*r
    return area
}
console.log(areaOfCircler(10))

function square(number){
    return number = number
}

console.log(square(10))
ihtiyacımız kadar para metre tanımlayabiliriz


function sumArrayValues(array){
    let total =0
    for (let i = 0; i< array.length;i++){
        total +=array[i]
    }
    return total
}
let dizi = [2,4,6,8,10,10]
sumArrayValues(dizi)
console.log('toplam',total)

-parametre sayımızı bilmiyorsak agrumenti kullana biliriz

function sumAllNums(){
    let sum =0
    for (let i = 0;i< arguments.length;i++){
        sum += arguments[i]
    }
    return sum

}
console.log(sumAllNums(1,2,3,4))//10
console.log(sumAllNums(10,20,30,40))//93
console.log(sumAllNums(15,20,30,25,10,33,40))//173

**ANONYMOUS FUNCTIONS
-isimsiz fonk
bir degiskene atanmıs fonksiyon degerinden bahseder

const anonmymousFun=function(){
    console.log(
        "I'm an anonymous function and my value is stored in ananmousFun"
    )
}
**EXPRESSION FUNCTION 
-anonim fonksiyondur geriye bir seyler döndürür

**SELF INVOKİNG FUNCTİON
-Kendi kendiini cagıran fonksiyon

(function(n){
    console.log(n*n)
})
let squareNum=(function(n){
    returnn*n
})(10)
-hata veriyorsa ; bak
!ARROW FUNCTİON
-normal fonk gibidir küçük degisiklikler disinda aynıdır
"=>"bu varsa arrow func
//normal fonsksiyon(regular function)
function hello(name){
    return´hello ${name}´

}
//ok fonksiyonu (aroow function)
const hello2 = name => return `hello ${name}`
tek  parametrede tek bir geri döndürme yapcaksak {} gerek yok
tek bir parametre alıyorsa parantes kullanmana gerek yok

const hello2 = (name ,surname) => ´hello ${name} ${surname}´

console.log(hello2('Ahmet','Altan'))
--argument yoktur arrowda onun yerine rest ... vardır
kalanını alma anlamına gelir dizi halinde döndürür

const toplama = (num1, ..numbers) => {
    console.log(num1)
    console.log(number)
}

toplama(2,5,7,8,10)

*/
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']


//   for( i = 0; i <= 10; i++){
//     console.log(i)
//   }
console.log("#")
console.log("# #")
console.log("# # #")
console.log("# # # #")
console.log("# # # # #")

// // Define the number of rows for the pattern:Desen için satır sayısını tanımlayın
// const numRows = 5;

// // Loop through each row:Her satırda döngü yapın
// for (let i = 1; i <= numRows; i++) {
//     let pattern = '';

//     // Loop to print '#' characters based on the current row number:Geçerli satır numarasına göre '#' karakterlerini yazdırmak için döngü
//     for (let j = 1; j <= i; j++) {
//         pattern += ' #';
//     }

//     // Print the pattern for the current row:Geçerli satırın desenini yazdır
//     console.log(pattern);
// }

const num = 5;

for(let i = 1; i<= num; i++){
    let pattern =''

    for(let j = 1; j <= i; j++){
        pattern +=' #'
    }

    console.log(pattern)
}


