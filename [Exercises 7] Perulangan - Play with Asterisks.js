// 1. Menyusun Barisan Bintang
var rows1 = 5
for(i=0 ;i< rows1 ; i++){
    console.log("*")
}


// 2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5
var star = ""
for (q=0 ; q < rows2 ; q++){
    for (w=0 ; w < 5 ; w++){
        
        star = star + "*"
    }
    console.log(star)
    var star =""
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5
var star2 = ""

for (e=1 ; e <=rows3 ; e++){
    for(t=0 ; t < e ; t++){
        star2 = star2 + "*"
        
    }
    console.log(star2)
    star2 =""
}