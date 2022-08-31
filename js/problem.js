// template String....my practice.....
// const name = "anne";
// /const age = "30";
// const job = "homeMaker";

// const sentence = `amr name ${anne}. amr age ${30}.amr job ${homeMaker}`
// /console.log(sentence);

// ternary operatore......alternative (if/else)
// const condition =(isStudent === true) ? "he is a student" : "he is not a student";
// console.log(condition);


//array spread operator2222.....
// 
// const number = [1,2,3,4,5,6,7,8,9,10]
// const number2 =[7.9,10,11,12,13,14,15]

// const newNumber = [987,...number, ...number2,78]
// 2.1console.log(newNumber);

//2.2 spread operator...../destructure......
// const [tax,team] = number;
// console.log(tax,team);

// const [x,y,...rest] = number;
// console.log(x,y,...rest);
// const me = [1,2,3];
// const ma = [...a];
// me.push(65)
// me.push(84)

// spread object/destructuring......3333
// const person ={
    // name:"hero alom"
    // age:43
// }
// const user={
    // phone:"walton"
    // address:"keranigonj"
// }
// const {name:myName,age} = person
// console.log(person);
// spread object/destructuring/ex-2......3333


const person ={
    name:"hero alom",
     age:43,
    phone:"walton",
    address:"keranigonj",
    p:[3,45,6,7]
}
// const {name,age,address,p:number} = person;
for(let i of number){
    console.log(i);
}
// console.log(name);

// nested object......
const rename ={
    name:'hello',
    age:98,
    subject:[
        {name:"bangla", mark:45},
        {name:"english", mark:76},
        {name:"math", mark:65}
    ]
}
// console.log(rename.subject[2].mark);
// undefined option chain
// console.log(rename?.subject[2]?.mark);

// arrow functon...1
const add = x =>x*5;
// console.log(add(2));

// default parameter.....
const add1 =(a=7,b=2)=>{
    return a+b;
};
// console.log(add1(8));

// forEach function....
const number = [1,2,3,4,5,6,7,8];
const names =['abul','babul','cabul','dabul'];
for(let item of names){

}
 names.forEach(item => console.log(item));
 names.map(item1 => console.log(item1));

