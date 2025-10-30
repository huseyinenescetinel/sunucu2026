// Değişken tanımı var let const

/*
ECMASCRIPT 6 ve sonrası => programlama dillerini standartlaştırır
W3C => HTML yi standarlaştırır.

6 ve öncesinde değişken tanımı

"var" ile yapılır

*/

// Var da değiştirilebilir.
// var adi="Enes"

// //Değişken=> İstediğin kadar değiştirebilirsim
// let yas=20;

// //Sabit değişken => Const değişmez. 1 defa tanımlanır ve öyle kalır. Güvenlik sebebeiyle oluşturuldu. Tc kimlik no, adres, e mail gibi değerler const değişkenine atanmalı.
// const adres="İzmir";

// // ECMASCRIPT 6 öncesi

// function topla(x,y){
//     return x+y
// }

// // ECMASCRIPT 6 Sonrası (Arrow Function)

// const add=(x,y) => x+y;

// // -----------------------------------------------------------

// let x=10
// if(x==10){
//     console.log("x 10'a eşittir")
// }



// let total=0
// for(let i=0;i<10;i++){
//     total+=i
// }

// // var ile let arasında ki farklar
// // var function scope - let ise block scope özelliğine sahiptir. let sadece süslü parantez içinde kullanılır. var ise her yerde. 

// function topla(){
//     let x=10
// }

// function test(){
//     if(true){
//         var degisken="Merhaba"
//     }

//     if (true){
//         console.log(degisken)
//     }    
// }
// test()

// Tekrar Tanımlama Özelliği

// var adi="Enes";
// var adi="Ahmet";

// let yas=20;
// let yas=25;

// var soyadi="Uzun"
// soyadi="Aydın"

// let adres="İzmir"
// adres="İstanbul"

// Hoisting => deklerasyon ve atama farkı

// adi="Enes";
// console.log(adi)

// var adi;
// -----------------------------------------------------------------
// Atama İşlemleri İmmutable(Değiştirilemez)

// let adi="Can"
// const adres="İzmir";

// let adi="Ahmet"
// const adres="İstanbul";

// Rest Operatörü
// function add(){
//     console.log(arguments)
//     let total=0
//     for(let i=0;i<arguments,length;i++){
//         total+=arguments[i]
//     }
//     return total
// }

// console.log(add(1,2,3,4,5,6))

//Rest

// const add=(...args)=>{
// console.log(args);
// let total=0;
// for(let i=0;i<args.length;i++){
//     total+=args[i]
// }
// return total    
// }
// console.log(add(1,2,3,4,5,6))



// function addToCart(urun_adi,adet,fiyat){

// }

// addToCart("Elma",2,10)
// addToCart("Armut",5,35)
// addToCart("Limon",8,65)

// Bu yöntem doğru mantık değil. Sürekli veritabanına istek gönderir. Tablo yapısını objeye istediğimiz zaman objeye çevirmeliyiz. Doğrusu aşşağı da

// let urun=[{
//     urunadi:"Elma",
//     adet:5,
//     fiyat:100
// },
// {
//     urunadi:"Armut",
//     adet:5,
//     fiyat:35
// },
// {
//     urunadi:"Elma",
//     adet:8,
//     fiyat:65
// }]


// function addToCartNew(urunler){
//     console.log("Ürün"+urunler.urunadi)
//     console.log("Ürün"+urunler.adet)
//     console.log("Ürün"+urunler.fiyat)
// }

// Distracting İşlemi

// let bolgeler=["Ege","Marmara","Karadeniz"]
// console.log(bolgeler[2])


// let [urun_adi,adet,fiyat]=["Limon",3,20]

// console.log(urun_adi)

// let [urun_adi,adet,fiyat]=[
//     {urun_adi:"Elma",adet:10,fiyat:100},
//     {urun_adi:"Elma",adet:5,fiyat:300},
//     {urun_adi:"Elma",adet:50,fiyat:10},

// ]

// console.log(urun_adi,adet,fiyat)

// // Filter

// const sayilar=[1,2,3,4,5,6,7,8,9,10]

// const ciftsayilar=sayilar.filter(sayi=>sayi%2==0);
// console.log(ciftsayilar)


// Find

// const numbers=[1,2,3,4,5,6,7,8,9,10]

// const ciftsayilar=numbers.find(function(sayi){
//     return sayi%2==0;
// }
// );

// console.log(ciftsayilar)



// map fonksiyonu

// const num=[1,2,3,4,5,6]
 
// const katSayi=num.map(num=>num*2)

// console.log(katSayi)


//reduce fonksiyonu

const nu=[1,2,3,4,5,6]

const total=nu.reduce((acc,curr)=>acc+curr,0)

console.log(toplam)



// forEach Fonksiyonu

const say=[1,2,3,4,5,6]
say.forEach(say=>{
    console.log(say)
})


// Hata Denetimi

try{
    const result=10/0
    console.log(result)
}catch(error){
    console.log("Hata:"+error.message)
}
finally{
    console.log("İşlem Tamamlandı")
}

function bolmeİslem(x,y){
    if(y==0){
        throw new Error("Sıfıra Bölme Hatası")
    }
    return x/y
}

try{
    const sonuc=bolmeİslemi(10,0)
    console.log("Sonuc",sonuc)
}
catch(error){
    console.log("Hata Yakalandı"+error.message)
}
