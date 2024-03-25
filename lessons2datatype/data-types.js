// let numOne = 3
// let numTwo = 3

// console.log( numOne == numTwo ) // burada vermis oldugumuz numOne ve numTwo degerine bakar primitive data type da değere bakalır
// // ve vermis oldugumuz 2 degerde 3 oldugu icin bizi TRUE boolean degerini dönecektir

// let js="JavaScript"
// let py="Python"

// console.log(js==py)//icerideki degere bakar ve biri js biri py birbirine esit olmadıgı icin false dönecektir

// /*
// -primitive veri türleri değerlerine göre karsilastirilir
// non-primitive veri türleri referanslarina göre karsilastirilir
// - non-primitive ve primitive farklılıkları sunlardır;
// -primitive---non-primitive
// degistirilemez--degistirilebilir
// düzenlenemez--düzenlenebilir
// karsilastirma islemlerinde degere bakilir--Referansa bakilarak karsilastirma yapilir
// */

// let nums = [1,'zeynep',2,3]

// console.log(nums)// array(dizi)icerisine tanimlamis oldugumuz elemanlarin hangi index'te yer aldigini gösterecektir 
// //elemeanlar 0.indexten baslar

// nums[1]=2//1.indexi 2 olarak degistirir primitive ve non-primitivin en baba degişik özelliklerinden biri budur primitive'de degistirme islemi yoktur non-primitive de vardir 

// // comparison-karsilastirma

// let nums1=[1,2,3]
// let nums2=[1,2,3]

// console.log(nums1==nums2)
// //false degeri döner because referansları aynı olmadıgı icin comparion islemi yapamayiz 
// //referans=bir nesnenin yerine geçen bir isim olarak düşünülebilir
// let user1={
//     name:"Akif",
//     age:12,
//     hobby:["basketball","football"],
//     country:"Turkey"

// }

// let user2={
//     name:"Akif",
//     age:12,
//     hobby:["basketball","football"],
//     country:"Turkey"

// }
// console.log(user1==user2)

// //non-primitive data types da comparison islem YAPMIYORUZ!!!

// //iki nesne ancak ayni nesneyi referans aliyorsa karsilastirma yapılabir
// let num5=[1,2,3]
// let numbers = num5
// console.log(num5== numbers)//burada true döner

// let userOne={
//     name:'Akif',
//     role:'student',
//     age:12,
//     city:'Kahramanmaras'
// }
// let userTwo=userOne
// console.log(userTwo== userOne)//

// //NUMBER DATA TYPE
// //-
// let age =12
// const gravity=9.81// yer cekimi ile ilgili bir sey oldugu için degismez bir deger const ile tanimlaniyor
// let mass=72//kütle
// //const PI=3.14//geometrik bir sabit

// //more examples

// const boilngPoint=100//
// const bodyTemp=37//

// //console.log(age,gravity,mass,PI,oilingPoint,bodyTemp)
// //MATH OBJECT 

// const PI =math.PI
// console.log(PI)

// console.log(Math.round(PI))
// console.log(Math.round((9.81)))
// console.log(Math.floor(PI))//3 e yuvarlar floor taban demektir
// console.log(Math.ceil(PI))//4 e yuvarlar ceil tavan demektir
// console.log(Math.min(-5,3,20,4,5,12))// en kücük değeri gösterir
// console.log(Math.max(-5,3,20,4,5,12))

// const randNum= Math.random()//rastgele bir sayı olusturur
// console.log(randNum)

// const num=Math.floor(Math.random()*11)
// console.log(num)
// //absolute value-mutlak deger
// console.log(Math.abs(-10))
// //square value-karesini alma
// console.log(Math.sqrt(100))
// console.log(Math.sqrt(2))
// //Power
// console.log(Math.pow(3,2))//9

// console.log(Math.E)//2.718

// //logarith
// //Returns the natural logarithm with E of x,Maath.log(x)
// console.log(Math.log(2))
// console.log(Math.log(10))

// //Trigonometry
// Math.sin(0)
// Math.sin(60)

// Math.cos(0)
// Math.cos(60)

// Math.tan(0)
// Math.tan(60)

