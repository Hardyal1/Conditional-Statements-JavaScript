let Element =document.body.querySelector(".box");
let q1 = Number(prompt("Enter The First Number"));
let op = prompt("Enter an Operation +,-,*,/");
let q2 = Number(prompt("Enter The Second Number"));

r1=q1+q2
r2=q1-q2
r3=q1*q2
r4=q1/q2

if (Number.isNaN(q1)){
    document.write("<p>First Number was not a Number, Try Again</p>");
}

if (Number.isNaN(q2)){
    document.write("<p>Second Number was not a Number, Try Again</p>");
}

if (op!=="+"&&op!=="-"&&op!=="*"&&op!=="/"){
    document.write("<p>Second Was not an operation, Try Again</p>");
}

if (op==="+"){
    document.write(r1);
}
if (op==="-"){
    document.write(r2);
}
if (op==="*"){
    document.write(r3);
}
if (op==="/"){
    document.write(r4);
}
