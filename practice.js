let a=10;
        console.log(a);
        let b=[1,2,3,4,5];
        console.log(b);
        console.log("hello world"); 

//variables,classes,functions,loops,objects

c=20; // global variable
var d=30;  //function scope
let e=50; //block scope

let arr=["apple","mango","guava"];
console.log(arr);

for(let i=0;i<5;i++){
    console.log(arr[i]);
}

arr.push("banana");
arr.pop();
arr.shift();
arr.unshift("kiwi");
arr.indexOf("mango");   

if(arr[0]=="apple"){
    console.log("apple");
}
else{
    console.log("no it is",arr[0]);
}



/*
function fun(){
        let a=5;
        if(a==5){
           f=10; //let has a block scope, var has function scope,
            console.log("inside",f);
        }
        console.log("outside",f);
}
fun();
console.log(f);
square_root(10);
function square_root(n){
    console.log(Math.sqrt(n));
    return "be happy";
}

//function hoisting
var sqrt_n=function(){
    console.log("in second fn");
    return;
}

square_root(10);
sqrt_n(10);
*/