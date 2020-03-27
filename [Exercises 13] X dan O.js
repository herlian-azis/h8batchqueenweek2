function xo(str) {
    // you can only write your code here!
    var temp_O = 0
    var temp_X = 0

    for (let i = 0; i < str.length; i++) {
        if(str[i]=="x"){
            temp_O +=1
        }else if (str[i]== "o"){
            temp_X +=1
        }
    }

    if (temp_X == temp_O){
        return true
    }else{
        return false
    }
    
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true