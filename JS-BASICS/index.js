//-------------------  Variable --------------------/
//JS is a Dynamic language
//static: type of variable cannot be changed in future
//dynamic: can change
console.log('hello world');
let name = 'mosh';
let firstName,lastName; 
console.log(name);

let rate=0.3;
rate=1; // can be changed with using let 

const myRate=0.3;
myRate=1; //this is erro

let isApproved = true;
let realName=undefined; //undefine is a value, also it is a type
let fakeName=null; // type of this variable is Object

//------------- Object type variable ---------------/
let person={ //This is object type variable
    name:'Mosh', //kye with value,or we call property with value
    age:30 //another kye with value
};

//two ways of change name of person
//first way
person.name='John';

//second way
person['name']='Mary'; // sometime we don't know what property we want tp change now,such as in the web user need to select first 
//example
let selection = 'name';
person[selection]='Mary';

console.log(person.name);


//-------------------- Array -------------------------/
let selectedColors=['red','blue']; //Array is a object type
console.log(slectedColors[0]);
selectedColors[2]='green';
selectedColors[3]=1; // this is ok
console.log(selectedColors.length);

//------------------- Function -----------------------/
function greet(name){ // name is parameter of function
    console.log('Hello'+name);
} // no need ;
greet('Muyun'); //'Muyun' is argument of function 

let result=greet('Mary');
console.log(greet('Mary')); //由于 greet() 没有 return 语句，它默认返回 undefined。

//------------------- Operators -----------------------/
let x=3;
let y=4;
console.log(x**y);

console.log(++x);
console.log(x++);
//Strict Equality
console.log(1===1); 
console.log(1==='True'); // this will show erro
//Lose Equality 
console.log(1==true); // this is ok, JS will change the right value's type to left value's type, then always correct
console.log(5 == "5");   // true，因为 "5" 被转换成了数字 5
console.log(0 == false); // true，因为 false 被转换成了 0
console.log(null == undefined); // true，这两个值被认为是“相等但不相同”
console.log([] == false); // true，因为 [] 被转换成空字符串 ""，然后变成 0
console.log(" \t\r\n" == 0); // true，因为空白字符串会被转换成 0

