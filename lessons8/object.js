//scops dediğimiz kapsam olayınada bakcagız
//SCOPE:değişkenlerin etki alanı veyahut görülebildiği alan 
// degiskenin bu kapsam içinde yaşayabileceğini ve bu metodunun dışında bir yerden erişilemeyeceğini söyler.
//Scope, değişkenlerin görünürlüğünü ve gizliliğini, nerede kullanıp nerede kullanamayacağımızı bildirmek için kullanılır.
/*
-Window
-Global
-Local

Window Scope
-
a='JavaScript'
b= 10
function letLearnScope(){
    console.log(a,b)
    if(true){
        console.log(a,b)
    }
}
console.log(a,b)
-Global scope:Program içerisinde fonksiyonların dışında tanımlanan ve her yerden erişilebilen scope tipidir.
let a ='JavaScript'
let b =10
function letLearnScope(){
    console.log(a,b)
    if(true){
        let a='Python'
        let b=100
        console.log(a,b)
    }
    console.log(a,b)
}
letsLearnScope()
console.log(a,b)
-Local :Global Scope'da belirtilen yapıların içerisinde tanımlanmış ve sadece tanımlandığı alan içerisinden ulaşılabilen değişkenlerin sahip olduğu scope türüdür

let a= 'Javascript'
let b=10
function letLearnScope(){
    console.log(a,b)
    let value=false
    if(true){
        let a='Python'
        let b =20
        let c=30
        let d=40
        value= !value
        console.log(a,b,c)
    }

    console.log(a,b,value)
}
letsLearnScope()
console.log(a,b)

*OBJECT:
-
const name = {}-bos bir object

const rectangle={
    length:20,
    width:20
}
console.log(rectangle)

const person={
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    country: 'USA',
    city: 'New York',
    skills:[
        'HTML',
        'CSS',
        'JavaScript',
        'PHP',
        'Node.js',
        'React.js',
        'Angular.js',
        'Vue.js'
    ],
    isMarried: true,
}
console.log(person)
-
Getting values from an object:nesneden degerlere erismek
using .followed by key name if the key-name is a one word:tek kelimeyse . koyup erisebiliriz
using square bracket and a quote:cok lu ise köşeli parantez icerisine property isimlerini yazarak erisebiliriz


const person={
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    country: 'USA',
    city: 'New York',
    isMarried: true,
    skills:[
        'HTML',
        'CSS',
        'JavaScript',
        'PHP',
        'Node.js',
        'React.js',
        'Angular.js',
        'Vue.js'
    ]
getFullName:function(){
    return´${this.firstName}${this.lastName}´
},    
'phone number':'+3589534685451'
}
--accessing values using-tekli
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location)

--value can be accessed using square bracket and key name
coklu

console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['location'])

--for instance to access the phone number we only use the square bracket method
-phone number görğntülemek için köşeli parantez kullanırız
console.log(person['phoneNumber'])

*Object method
const person ={
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    country: 'USA',
    city: 'New York',
    isMarried: true,
    skills:[
        'HTML',
        'CSS',
        'JavaScript',
        'PHP',
        'Node.js',
        'React.js',
        'Angular.js',
        'Vue.js'
    ],
    getFullName:function(){
        return ´I am ${this.firstName} ${this.lastName} and I live in${this.city},${country}. I am ${this.age}´
    }
    
    
}
-object,assign:objenin orjinalini bozmadan kopyalar


let newPerson = object.assign({},person)
console.log(person)
newPerson.name='zeynep'
--altarnative
let newPerson ={...person}-bu her kosulda calısmayabilir deneyerek yap
newPerson.name='akif'
console.log(person)
--keys bize tüm keyleri döndürür
console.log(Object.keys(person))
--values:degerleri döndürür
console.log(Object.values(person))
--entries: hem keyleri hem valueları döndürür
console.log(Object.entries(person))//array olarak döner

for (let[key,val] of Object.entries(person)) ){
    console.log(key,val)
}
-bu sekildede yazdirabiliriz

-hasOwnPropert:bir özellik var mi yok mu ona bakar
console.log(person.hasOwnProperty('name'))
console.log(person.hasOwnProperty('score'))

-object.freeze():objemizi olusturdugumuzda freezlerse degiştirilemez bbir daha
const obj={
    prop:42
}
Object.freeze(obj)

obj.prop=33
console.log(obj.prop)-degistirilmez

-object.seal():yeni bir sey ekleyip silemeyiz ama içerideki propertys replaceable 



*/