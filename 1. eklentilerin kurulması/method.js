/*
let sayi = prompt("sayı giriniz:");

let toplam = 0;
for(let i = 1;i<sayi;i++){
    if(sayi%i==0){
        toplam += i;
    }
    console.log(toplam)
   
}
if(sayi==toplam){
    alert(sayi+" sayısı mükemmel sayıdır")
}
else{
    alert(sayi+" sayısı mükemmel sayı değildir")
    alert(toplam+" toplam etti")
}
    */

/*
let sayi = prompt("sayı giriniz: ")
binaryCevirme(sayi);

function binaryCevirme(number){
    let binary ="";
    while(true){
        binary+=(number%2).toString();
        number=Math.floor(number/2);
        if(number==1){
            binary+=1;
            break;
        }
    }
    let result = reverse(binary);
    console.log("Sonuç: "+result);
    alert(sayi+" sayısının binary çevrilmiş hail: "+result)
}
function reverse(binary){
    let reverseBinary = "";
    for(let i = binary.length-1;i>=0;i--){
        reverseBinary+=binary.charAt(i);
    }
    return reverseBinary;
}
*/
//debugger;

/*
let sayi = prompt("binary sayı giriniz: ");


function binaryeCevirme(number){
    let toplamBinary = 0;
    let us = 0;
    for(let i =number.length-1; i>=0;i--){
        toplamBinary+=Number(number.charAt(i))*Math.pow(2,us);
        us ++;
    }
    
    alert("girdiğiniz binary sayının karşılığı:" + toplamBinary);
}
binaryeCevirme(sayi);
*/







