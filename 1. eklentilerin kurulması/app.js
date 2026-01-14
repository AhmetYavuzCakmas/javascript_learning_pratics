//alert("uyarı")
/*let isim = prompt("adınızı girniz: ")

kontrolEt(isim)

function kontrolEt(ad){
    if(ad != ""){
        let tckn = prompt("tc yi giriniz: ")
        if(tckn.length ==11){
            console.log("sonraki sayfaya geçiniz")
        }
        else{
            console.log("tc yi doğru gir")
        }
    }else{
        console.log("adını düzgün gir")
    }
}
*/

/*
let dizel = 24.563, benzin = 22.55, lpg = 11.1;
const yeniSatir = "\r\n"; 

const yakitMetni = "1-Dizel" + yeniSatir
+ "2-Benzin"+yeniSatir
+ "3-LPG"+yeniSatir
+ "Yakıt türünüzü seçiniz";

let yakitTipi = Number(prompt(yakitMetni));
let yakitLitresi = Number(prompt("kaç litre alacaksınz"));

if(yakitTipi =="1"){
    let odenecekTutar = dizel*yakitLitresi;
    alert(odenecekTutar+" tl ödemeniz bulunmaktadır");
}else if(yakitTipi=="2"){
    let odenecekTutar = benzin*yakitLitresi;
    alert(odenecekTutar+" tl ödemeniz bulunmaktadır");

}else if(yakitTipi=="3"){
    let odenecekTutar = lpg*yakitLitresi;
    alert(odenecekTutar+" tl ödemeniz bulunmaktadır");

}else{
    alert("lütfen geçerli yakıt gir");
}
*/

/*
for(let i = 0; i<11;i++){
    for(let j = 0; j<11;j++){
        let sonuc = i * j
        console.log(i+" * "+j+" = "+sonuc)
    }
    console.log("-------------------------")
}
*/

/*
for(let i = 2; i<101;i++){
    for(let j = 2;j<i;j++){
        let asalMi = i%j;
        if (asalMi!=0){
            console.log(asalMi+"asaldır")
        }
    }
}
*/
/*
let sayi = prompt("sayı giriniz: ");
let toplam = 0;
for(let i=0;i<sayi.length;i++){
    let rakam = Number(sayi.charAt(i));
    toplam+=rakam**3
}
if(sayi == toplam){
    alert(sayi+" sayısı armstrongtur")
}else{
    alert(sayi+" sayısı armstrong değildir")
}
*/

