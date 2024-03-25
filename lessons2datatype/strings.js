// //STRİNGS
// let space=' '
// let firstName='Akif'
// let lastName='ila'
// let country='Turkey'
// let city='Kahramanmaras'
// let language='JavaScript'
// let job='student'
// //STRING CONCATENATİON-strinleri birlestirme

// let fullName=firstName+' '+lastName;
// console.log(fullName)

// //TEMPLATE LİTERALS

// let personInfoTwo= `I am ${firstName}.I surname:${lastName}. I live in ${country}`
//!MORE EXAMPLE
/*
1-let challenge="your name is Akif"-bir degiskeni olusturduk ve baslangıc değeri atadık
2-console.log(challenge)-stringimizi tarayıcı konsoluna yazdırdık
3-console.log(challenge.length)-değişkenin uzunluğunu yazdırdık
4-console.log(challenge.toUpperCase())-bütün harfleri büyük yapar
5-console.log(challenge.toLowerCase())-bütün harfleri küçük yapar
6-console.log(challenge.substr(0,challenge.indexOf(' ')))-ilk kelimeyi keser
7-console.log(challenge.includes('Akif'))-içinde var mı sormus oldugumuz kelime içeride var mı ona bkar
8-console.log(challemge.split( ' '))-stringimizi her bbosluktan keserek  diziye cevirir
9-console.log(challenge.replace('Akif','Enes'))-replace metodu ile bir string yerine baska bir string yazabiliriz
10-console.log(challenge.charAt(1))-stringimizin 1. indexindeki karakteri bize doner
console.log(challenge.charAt(3).toLowerCase)3. indexteki karakteri büyük yapar
indexOf()-bir karakterin ilk nerede gectigini söyler
lastIndexOf()-karakterin en son hangi konumda gectigini söyler
11-console.log(sentence.indexOf('Akif'))-akif kelimesinin ilk gectigi konumu gösterir
12-console.log(sentence.lastIndexOf('Akif'))-akif kelimesinin en son hangi konumu gösterir
13-sentence.search()buda aslında indexOf gibi ilk gectigi yeri gösterir
14-console.log(challenge.trim())--basındaki ve sonundaki boslukları yok eder
15-console.log(challenge.startWith('30'))- 30 ile mi baslıyor ona bakar
16-console.log(challenge.endWith('30'))-30 ile mi bitiyor ona bakar
17-console.log(challenge.match('a'))-stringimizdeki tüm a harflerini bulur
let firstName='Mehmet Akif'
let lastName='Kilinc'
18-console.log(firstName.concat(' ',lastName.concat('))-iki stringi birlestirme
19-console.log(challenge.repeat(2))-stringi iki kere yazdırır

!lil dificult example
1- string degerindeki elemanımız 10 'a esit olup olmadıgını kontrol et. esit degilse typeof olarak 10 2 a esitle
-aslında string degerindeki bir degeri int veri tipine dondürüyouz

let num ='10'
if(typeof num !== typeof 10){
    num= number(num)
}
console.log(num,typeof num)


2-parseFloat('9.8') in 10'a esit olup olmadıgını kontrol et. esit degilse 10'a esitle
let floatNum= parseFloat('9.8')
if ( floatNum !== 10){
    floatNum=Math.ceil(floatNum)
}
console.log(floatNum)

3- incules metodu ile var mı diye arat

let shortSentence="'m happy. She exercises every morning. His dog barks loudly. My school starts at 8:00."
console.log(shortSentence.includes('exercise'))

4-random metodu ile 0-100 arasında sayı olustur
console.log(Math.floor(Math.random()*101))
5-random metodu ile 50-100 arası sayı olustur
console.log(Math.floor(Math.random()*51)+50)

!It gets a little harder
1- kac tane love kelimesi geciyor bul
let sentence ='Love is the best thing in this world. Some found their love and some are still looking for their love'
let count = (sentence.match(/love/gi)|| []).length;
console.log(count)

2-let messySentence="%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching"
let cleanSentence=messySentence.replace(/[^a-zA-Z]/g," ")

let words=cleanSentence.split(' ')
let wordCounts= {}
for (let i=0 ; i<words.length ;i++){
    if(words[i] !==  ' '){
        (wordCounts[words[i]] || 0) +1
    }
}
let maxWord= ''
let maxCount = 0
for (let word in wordCounts){
    if(wordCount[word] > maxCoumt){
        maxCount = wordCounts[word]
        maxWord = word
    }
}
console.log(´Most frequnet word is'${maxWord}' with count ${maxCount})
*/