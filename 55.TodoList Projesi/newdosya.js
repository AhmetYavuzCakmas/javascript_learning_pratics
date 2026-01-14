/*
const hesapla = (a,b)=>{
    const toplama = a+b;
    const cikarma = a-b;
    const carpma = a*b;
    const bolme = a/b;

    const dizi = [toplama,cikarma,carpma,bolme];
    return dizi;
}
[a,b,c,d] = hesapla(10,2);

console.log(a,b,c,d);
*/



//let names = ["enes","nezir","azmi","lütfi","şahin"];

/*
names.forEach(function(name){
    console.log(name);
})
*/

/*
names.forEach((name)=>{
    console.log(name)
})
*/

/*
names.forEach(name=>console.log(name))
*/

/*
for(let name of names){
    console.log(name);
}
*/

/*
function write(firstName, lastName){
    console.log(`isim: ${firstName} soyisim: ${lastName}`)
}

write("yavuz","çakmas");
*/


/*
function prepareURL(url, id){
    if(id===null){
        return url;
    }
    return `${url}?postId=${id}`;
}

function getComment(url, id){
    let newURL = prepareURL(url, id);

    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState===4 && xhr.status===200){
            console.log(JSON.parse(xhr.responseText));
        }
    })

    xhr.open("GET", newURL)
    xhr.send();
}

function getData(url){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState===4 && xhr.status===200){
            console.log(JSON.parse(xhr.response));
        }
    })

    xhr.open("GET", newURL);
    xhr.send();
}

getComment("https://jsonplaceholder.typicode.com/comments",1);
*/


let check = false;
function createPromise(){
    return new Promise((resolve, reject)=>{
        if(check){
            resolve("promise te herhangi bir sıkınıt yok")
        }else{
            reject("sıkıntı büyük")
        }
    })
}

createPromise()
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>console.log("her zaman çalışır"))