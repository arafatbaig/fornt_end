console.log("this is from 'functionsinjs.js'");
function employer(role){
    console.log("software "+ role);
}
let role="developer";
let role2="tester";
let role3="saler";

employer(role);
employer(role2);
employer(role3);

function greeting(griting,nam){
    let calling="adnan";//this is not execute because it is local and everything outside the function is global
    console.log(griting+" "+nam);
}
let calling="adnan";
let calling2="ishan";
let calling3="arafat";
let wishing="goood morning";
greeting(wishing,calling2);
greeting(wishing,calling3);

function sum(a,b,c){
    let x=a+b+c;
    return x;
    // console.log("everything after return statement(it is also called end function) does not exexuted")
}
sum(2,4,6);
let returnVal=sum(2,4,6);
console.log(returnVal);