/*
-tekrar edilen ifadeler icin kullanırız
- FOR LOOP:
for loop structure:for döngüsü yapısı
for(initialization,condition,increment/decrement){
---,kosul,artırma/azaltma işlemi
}
for(let i= 0;i<=5 ;i++){
    console.log(i)
}
for(let i= 0;i>=5 ;i--){
    console.log(i)
}
for(let i =5 ;i>=0;i--){
    console.log(´${i}*${i}=${i*i}´)
}carpım tablosu

for( let i= 0 ;i>= 100;i++){
    console.loog('i',i)
}

const names=['akif','cem','enes','veli','ahmet','oguz','hqlil']
for( let i=0;i<names.length;i++){
    console.log(names[i])
}

const countries = ['Bali','geogrge',''denmark','ıceland']
const newArr=[]
for(let i=0 ; i< countries.length;i++){
    newArr.push(countries[i].toUpperCase())
}
console.log(newArr)
*/
/*
!while
let i= 0
while(i<=5){
    console.log(i)
    i++
}



!do while:kosul true olmasa bile bir defa calıstırır
let i =0

do {
    console.log(i)
    i++ 

}while{i<=5}
    
! for of loop
-diziler için index vermez
const number = [1,2,3,4,5,6,7,8]

for(const num of numbers){
    console.log(num)
}
?break:kesmek
-aradıgımızı bulunca döngüyü durdur kes 
for (let i =0;i<=5;i++){
    if(i == 3){
        break
    }
    console.log(i)
}

?continue :certain mevcut o andaki iterationsu atmak için kullanılır
for(let i = 0; i<= 5; i++){
    if(i==3){
        contiune
    }
    console.log(i)
}


*/

// !lil examples
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

//dizinin uzunlugunu bul
// console.log(webTechs.length)
// console.log(countries.length)
// console.log(webTechs.sort())//kücükten büyüge sıralama
// console.log(webTechs.reverse())//tersten yazdırma
// console.log(webTechs.pop())//son elemanı sil
// console.log(webTechs.push('Php'))//elemanı sona ekler
// console.log(webTechs.shift())//bastaki elamanı siler
// console.log(webTechs.unshift('NodeJs'))//basa eleman ekler
// console.log(webTechs.splice(' '))
// console.log(webTechs.slice(1,3))//belli bir degerden belli bir degere kadar ekrana yazdırır
// alert(countries.concat([2,4],[5,7]))//dizileri veya elemanları birbirine eklemeye yarar.

console.log(countries.includes('Kenya'))//icinde var mi







