let a = 1;
let b = 5;
let c = 10; 

if (a != b && a != c && b != c){
    console.log("Scalene Trangle");
}else if(a == b || b == c || c == a ){
    console.log("Isosceles Trangle");
}else{
    console.log("Equilateral Trangle");
}