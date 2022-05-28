const sayHello = (name) =>{
  console.log("Hello, " + name);
}

sayHello("Jackie");

const returnSayHello = (name)=>{
  return "Hello, " + name;
}

const greeting = returnSayHello('John');

console.log(greeting);