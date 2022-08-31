// one parameter simple version....
// const fiveTime = num =>num*6;
// const sixTime = num3 => num3*5;
// const eightTime = num3 =>num*6;

const data={
    count = 5000,
    data:[
        {id:1,name:'Sakib al hasan',salary:786},
        {id:3,name:'junaid hasan',salary:986},
    ]
}
// console.log(data.data[0].salary);

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

   const fiveTime = [1,2,3,4,5].map(x => x*5);
   console.log(fiveTime);