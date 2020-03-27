// 1. Melakukan Looping Menggunakan While
console.log("'LOOPING PERTAMA'")
var i = 2
while(i <= 20 ){
    console.log( i ,"- I love coding")
    i= i + 2
}

console.log("LOOPING KEDUA")

var j = 20
while( j >= 2){
    console.log(j ,"- I will become fullstack developer")
    j = j - 2
}


// 2. Melakukan Looping Menggunakan For

console.log("'LOOPING PERTAMA'")
for(f=1 ; f<=20 ; f++){
    console.log( f ,"- I love coding")
}


console.log("LOOPING KEDUA")

for (q=20 ; q >=1 ; q--){
    console.log(q ,"- I will become fullstack developer")
}

// 3. Angka Ganjil dan Genap

for(w=1; w <=100 ; w++){
    if(w % 2 ==0){
        console.log(w , "GENAP" )
    }else if( w % 2 == 1){
        console.log(w , "GANJIL" )
    }
}

for(e=1; e <=100 ; e= e+ 2){
    if(e % 3 == 0){
        console.log("3 kelipatan 3", e)
    }else{
        console.log(`""`)
    }

}

for(r=1; r <=100 ; r= r+ 5){
    if(r % 6 == 0){
        console.log("6 kelipatan 6", r)
    }else{
        console.log(`""`)
    }

}
for(t=1; t <=100 ; t= t+ 9){
    if(t % 10 == 0){
        console.log("10 kelipatan 10", t)
    }else{
        console.log(`""`)
    }

}