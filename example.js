


// template string
const elementHTML = `<div>
<h2>${name}</h2>
<p>${elementHTML}</p>
<p>salary:${calculateSalary(salary,tax=0.98,bonus=0.87)}</p>
</div>`


// multiline
 const multyline =`first line +
second line + third line + fourth line + fifth line`;
console.log(multyline);

 
// function declaretion/regular function...
function add(first,second){
    const total = first + second;
    return total;
}

// const number = 56;
// function expression
const add1=function add1(first,second){
    const total = first + second;
    return total;
}


// function expression with anonymous....
// const number = 56;
const add2 = function (first,second){
    const total = first + second;
    return total;
}
// arrow function simple.....
const add6 = (first,second)=> first + second;
const add4 = (third,fourth)=> third + fourth;
// arrow function simple..another...
const doublIt = salary =>salary*bonus;
const calculateSalary = (salary,tax,bonus)=>salary-salary*tax+bonus;


// const add6 = (first,second) =>first + second;

// arrow function with 2 parameters

// arrow function with no parameters
// const getpie = () =>3.12;s
// const result =() =>790;
const add3 = ()=>654;

// / arrow function with one parameters
const result = (first) => first *4;
const getpie =(sum) =>sum*4;
const getResult =(total)=>total*2;
const getpower =(percent)=>percent*6;


// one parameter simple version....
// const fiveTime = num =>num*6;
const sixTime = num3 => num3*5;
const eightTime = num3 =>num*6;


// const result = add6(10,30);
console.log(result);

// default parameters
function calculateSalary(salary,tax = 0,bonus = 89){
    const remaining = salary - salary*tax;
    const total = remaining + bonus;
    return total;
}

// destructuring.....
// const {x,y,z,....c} = {x: 45,y: 89,z: 90,name:'Sakib al hasan',salary:786};
// const [a,b,...c]= [21,76,90,43];
const c = [90,43];
console.log(c);

// spread function
const ages =[12,76,54,78];
// const newAges =[....ages,76,43,32];

// nested object(1).....
const data={
    // count = 5000,
    data:[
        {id:1,name:'Sakib al hasan',salary:786},
        {id:3,name:'junaid hasan',salary:986},
    ]
}
console.log(data.data[0].salary);
// nested object(2).....
const user ={
 name:'Sakib al hasan',
 address:{
    street:{
        first:'78/a khulshi chittagong',
        second:'Third floor',
        third:'right side'
    },
postOffice:'khulshi',
city:'chittagong'
 }   
}

const userFloor= user.address?.street?.second;
console.log(userFloor);

// const same number double
const num =[12,45,33,25];
// const doublIt = num =>num*2;

// makeDouble function
// map function....1///
const makeDouble = numbers.map(x=>x*2);
const fiveTime = [1,2,3,4,5].map(x => x*5);

// map function....2///
const friends = ['tom-harry', 'tom-larry', 'tom-karry'];
const firstLetters = friends.map(friend =>friend.length);
const nameLetters = friends.map(friend => friend.length);

// map function....3///
// const numbers = [1,2,3,4,5]
const half =numbers.map(x => x/2);
const third =numbers.map(x => x/3);

// filter function...
// const numbers = [89,96,54,34,76];
const bigNums = numbers.filter(n=>n.length);
// const tiny = numbers.filter(n=>n.<50);
const even = numbers.filter(n=>n%2==0);
console.log(even);

// find function....///
const numbers = [89,96,54,34,76];
// const expensive = numbers.find(numbers=>numbers.length>50);
const expensive = numbers.find(numbers=>numbers%5===0);


// syntactic sugar....
class instructor{
    name;
    designation='web develop course';
    team ='web team';
}
    // constructor(name,location){
        this.name=name;
        this.location=location;
    
    // startSupportSession(time){
        console.log(`satrt the support session ${time}`);

// createQuiz(module){
    console.log(`please createQuiz for module ${module}`);

const amir = new instructor('amir', 'location');
console.log(amir);
amir.startSupportSession('9.00');
amir.createQuiz(90);
