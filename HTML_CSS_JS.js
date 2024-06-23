// console.log("Hello world!")  //log -- prints O/P

// console.error("you've an error in this code")  //used for error

// let obj = { a : 1, b : 2, c : 3}
// console.table(obj)  // it create table
 
// console.info("very important")

// console.assert(10>5)

// console.time("console")
// console.timeEnd("console")

// console.warn("warning...")
// //console.clear() // it clear display

// alert("your code is working")
// let a = prompt("let's check the browser")
// document.write(a)
// let write = confirm("do you want to write in this page ?")
// if(write){
//     document.write(a)
// }
// else{
//     alert("sorry..try again")
// }

// console.log(window)
// window.console.log(window)
// document.body.style.background = "yellow";

// let a  = prompt("Enter your Age ")
// if(a > 18 ){
//     location.href = "https://www.google.co.in/"
// }
// else
// alert("you can't drive ")
// let color = prompt("Enter page color ")
// document.body.style.background = color

// let a = document.getElementById("id1")
// //console.log(a.matches(".box1"))
// console.log("Matches : ",a.matches(".class"))
// console.log("Matches : ",a.matches(".box1"))

// console.log(a.closest(".box1"))
// console.log(sp1.closest("#id1"))

// console.log("contains : ",a.contains(sp1))
// console.log("contains : ",sp1.contains(id1))

// console.log("All Nodes : ",document.childNodes)
// console.log("first Child : ",document.firstChild)
// console.log("last Child : ",document.lastChild)
// console.log(document.childNodes[0]==document.firstChild)
// console.log(document.childNodes[0]==document.firstChild)

// 02-01-2024
// console.log(id1.hasAttributes())
// console.log(id1.getAttribute("class"))
// console.log(id1.dataset)

// 03-01-2024
// let a = document.getElementsByTagName('div')[0]
// let div = document.createElement('div')
// div.innerHTML = '<h1>Hello world!</h1>'
// a.innerHTML = a.innerHTML+'<h1>Hello world!</h1>'
// a.append(div)
// a.prepend(div)
// a.after('div')
//a.before(div)

// first.insertAdjacentHTML('beforebegin', '<div class="test"> beforebegin</div/>')
// first.insertAdjacentHTML('beforeend','<div class="test">beforeend</div>')
// first.insertAdjacentHTML('afterend','<div class="test">end of docment</div>')
// first.insertAdjacentHTML('afterbegin','<div class="test">starting document</div>')

//04-01-2024
// let a = document.getElementById("first")
// console.log(a)
// console.log(a.classList)
// console.log(first.remove("white"))
// console.log(a.classList.toggle("yellow"))
// console.log(a.classList.add("blooper"))
// console.log(a.classList.contains("yellow"))
// alert("Hi, Anil")
// let a = setTimeout(function(){
//     alert("Hey, I am inside time");
// },4000)
// console.log(a)
// setInterval(function(){
//     alert("Hello")
// },3000)

//15-01-2024
// btn.addEventListener("click",function(){
//     prompt("Enter Your code ")
// })

// btn .addEventListener("click",function(){
//     alert("You're In ...")
// })

//25-03-2024
let a = prompt("Enter Number")
if (a==1){
  btn.addEventListener('click',function(e){
    alert("hello world")
  })
}
else{
    btn.addEventListener('click',function(d){
        alert("goodBye")
    })
}