//Name function
/*function data(){
    console.log("hii");
    console.log("hello");

}
data();

// Anonymous function
// function (){
//console.log(sum);
//}


// arrow func
/*let app=()=>{
    console.log("I am arrow function")
};

let a2=(x,y)=>{
    console.log(x);

};
a1(10);


let a1=(x,y)=>{
    let sum=x+y;
    console.log(sum);//30
    return sum;
};

let returnVal=a1(10,20);
console.log(returnVal);

let a3=(x)=>x;
let val=a3("hello");
console.log(val);

/*
// Array Destructing
let arr=[10,20,30];

let[a,b,c]=arr;
console.log(a,b,c);

let arr2=[1,2,3,4,5,6];
let [q,,w,,e]=arr2;
console.log(q,w,e);



// NESTED ARRAY DESTRUCTING
let arr3=[10,20,[100,200,[1000,2000]]];

//console.log(arr3[2][2][1]);// mujhe keval 2000 ko print krna hai tb ye lange


let[,n1,[,n2,[,n3]]]=arr3;
console.log(n1,n2,n3);


//2nd method

let arr3=[10,20,[100,200,[1000,2000]]];

console.log(arr3[2][1]);

let [,,NESTEDArray]=arr3;
console.log(NESTEDArray);


// Object Destructring

let obj={
    ename:"user",
    email:"user@gmail.com",
    password:"user123",

};
console.log(obj.ename);
console.log(obj["ename"]);


let {email,password}=obj
console.log(email);
console.log(password);


// nested object destructuring

let obj2={
    ename:"prasad",
    subject:["html","css","reactjs"],
    friends:{
        bestfriend:"ranjan",
    },

};
let {
    subject:[,,,sub],friends:{bestfriend}}=obj2
    console.log(sub);//reactjs
    console.log(bestfriend);//ranjan




// Rest and spread

let arr=[10,20,30,40,50]
console.log(...arr);//spread
console.log(arr);

let arr2=[...arr]//rest
console.log(aar2);






let obj={
    id:1,
    ename:"raj",

};
let newObj={
    ...obj,
    company:"Tcs",
    salary:500000,
};
console.log(newObj);

function data(a,b,...rest){
    console.log(a,b);
    console.log("rest",rest);
    console.log("spread",...rest);
}
data(10,20,30,40,50,60,70,80);


// Modules
// Named
import {userData ,getUsers} from"./utility.js";
//Default 
import getProducts from"./utility.js";
let [data1,data2]=userData()
console.log(data1,data2);

let users=getUsers()
console.log(users);

let products=getProducts()
console.log(products);


// array function;
let vall=products.forEach((ele,i,arr)=>{
    console.log(ele.title,i,arr);
    return "hello";
});

let val2=products.map((ele,i,arr)=>{
    console.log(ele.title,i,arr);
    return "byee";
});
console.log(vall);
console.log(val2);
*/

let arr=[10,20,30,40,50,30];
let val=arr.filter((ele,i)=>{
    console.log(ele);
    return ele === 30;
});
console.log(val);

let val2 = arr.find((ele)=>{
    return ele === 30;

});
console.log(val2);