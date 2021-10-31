// console.log("Welcome to MERN Camp from Saad");
// console.log(window);
// console.log(window.document);
// console.log(document.querySelector('h1'));


// var a =document.querySelector("h1");
// a.innerText="Welcome to inline";


// var a =document.querySelector("h1");
// a.innerHTML="<p>Welcome to test</p>"


// console.log(document.URL);


// window.alert("Hello this is Saad");


//window.localStorage.setItem("test", "Welcome to Saad from  Merncamp");
//window.localStorage.removeItem("test");









// var (Global Scope)
// ==========================================================

// var a = "Welcome to Javascript Practise";    
// if (true)
// {
//     console.log(a);
// }


// var a = "Welcome to Javascript Practise";   // var is a part of window object
// console.log(window.a);


// var a ="saad";
// var a = "wasi";         //redeclartion is possible with var 
// console.log(a);        

// var a ="saad";
// a = "wasi";         //reassignment is also possible with var 
// console.log(a);     









// let (Block Scope)
// ================================================================

// if (true)
// {
//     let a = "Welcome to Javascript Practise";
// }
// console.log(a);     //  a is not defined


// let a ="saad";
// let a = "wasi";         //redeclartion not possible with let 
// console.log(a);


// let a ="saad";
// a = "wasi";         //reassignment is possible with let 
// console.log(a);











// const 
// =====================================================================


// if (true)
// {
//     const a = "Welcome to Javascript Practise";     
// }
// console.log(a); //  a is not defined



// const a ="saad";
// const a = "wasi";         //redeclartion  not possible with const 
//console.log(a);        //a has already been declared


// const a ="saad";
// a = "wasi";
// console.log(a);   //reassignment  not possible with const 











// Object
// let obj = {};
// obj={
//     name:"wasi",
//     id:10
// }
// console.log(obj);



// const obj = {};     
// obj={
//     name:"wasi",
//     id:10
// }
// console.log(obj); //Error Assignment to constant not allowed 



// const obj = {
//     name: "mukaraum",
//     id:21
// };     
// obj={
//     name:"wasi",
//     id:10
// }
// console.log(obj); //Error Assignment to constant not allowed 



// const obj = {
//     name: "mukaraum",
//     id:21
// }

// obj.name="jamal";

// console.log(obj);  //change value of const is allowed




// const fname= "Saad";
// const lname= "Ur Rehman";
// const age=prompt("Please enter your age");
// alert(fname+ " " +lname+ "age is "+age);






//Template Literals

// const fname= "Saad";
// const lname= "Ur Rehman";
// const age=prompt("Please enter your age");
// alert(`${fname} ${lname} age is ${age}`);








// Functions


// function welcome()
// {
//     alert("Welcome to Pakistan");
// }
// welcome();




// function welcome(name, age)
// {
//     alert(`Welcome ${name}. Your age is ${age}`);
// }
// welcome("Saad", "33");





// function welcome(name, age=32)
// {
//     alert(`Welcome ${name}. Your age is ${age}`);
// }
// welcome("Saad");





//Arrow Functions (One liner)
//const welcome = (name, age=32) => alert(`Welcome ${name}. Your age is ${age}`);
// welcome("Saad");






//Arrow Functions (Multiple liner)
// const welcome = (name, age=32) => {
//     return alert(`Welcome ${name}. Your age is ${age}`);
// }
// welcome("Saad");






// const allBlogs = (title,body) =>{
//     if(!title)
//     {
//         throw new Error("Title not found");
//     }
//     if(!body)
//     {
//         throw new Error("Body not found");
//     }
//     return `${title} ${body}`
// }

// alert(allBlogs("Saad", "is one of the best developer of the world"));





//this
//this keywords refer to the enclosing context 
//console.log(this);   // in this case enclosing context is window




// this in function
// var obj1 = {
//     city: ["Karachi","Lahore","Multan"],
//     allCities: function () {
//         return this.city.join(" - ");
//     }
// };
// console.log(obj1.allCities())




// Object Destructring


// let student ={
//     id: 11,
//     age: 32,
//     name: "Saad Ur Rehman",
//     education: ["BSCS", "MSCS"],
//     isAlive: true,
//     religion: "Islam",
// }
// let {id, age, name, education,isAlive, religion} = student;
// console.log(id);
// console.log(age);
// console.log(name);
// console.log(education);
// console.log(isAlive);
// console.log(religion);




// Array destructuring

// const array1 = ["firstone","secondone","third"];
// const [first , second, third] = array1;
// console.log(first);
// console.log(second);
// console.log(third);




// const array1 = ["firstone","secondone","third"];
// const [firstone] = array1; // Get first element of an array
// console.log(firstone);





// const array1 = ["firstone","secondone","third"];
// const [,secondone] = array1; // Get second element of an array
// console.log(secondone);





// Spread Operator  (use to merge arrays)

// const SindhCities=["Karachi","Hyderabad","Mirpurkhas"];
// const PunjabCities= ["Lahore","Faislabad","Rawalpindi"];
// const otherCitie= ["Muzafarbad", "Hunza"];
// const capital = "Islamabad";
// const allCities=[...SindhCities, ...otherCitie, ...otherCitie, capital];
// console.log(allCities);



// Rest Operator


// const allCities= ["Karachi","Lahore","Muzafarbad","Rawalpindi","Faislabad"];
// const [karachi, ...othercities]=allCities
// console.log(karachi);
// console.log(othercities);







//Prototye (Previously js has no official classes at that time we use functions with protype to behave like classes)


// function Holiday(destination, days)
// {
//     this.destination=destination;
//     this.days=days;
// }

// Holiday.prototype.info = function()
// {
//     return "Your destination is " +this.destination + "and you want to spend "+this.days+ "for holidays";
// }

// const firstdestination = new Holiday("karachi", 32);
// console.log(firstdestination.info());











// classes


// class Students {
//     constructor(studentname, age)
//     {
//         this.studentname = studentname;
//         this.age=age;
//     }

//     info()
//     {
//         console.log("student name is" +this.studentname + "and age is "+this.age);
//     }
// }


// const firstStudent= new Students("Saad Ur Rehman", 32);
// firstStudent.info();

// const secondStudent= new Students("Wasi Sajjad", 27);
// secondStudent.info();







// Inheritance

class Students{
    constructor(name, email)
    {
        this.name=name;
        this.email=email;
    }

    information()
    {
        console.log("name is " +this.name+ "email is " +this.email);
    }
}

class StudentDetail extends Students{

    constructor(name, email, age, phone)
    {
        super(name,email)
        this.age=age;
        this.phone=phone;
    }
    information()
    {
        super.information()
        console.log("age is "+this.age + " phone is "+this.phone);
    }
}


const firstStuden= new StudentDetail("saad", "saadcsku@gmail.com", 32, "03432897544");
firstStuden.information();
















