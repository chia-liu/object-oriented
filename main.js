console.clear()

// 類別的開頭慣用大寫作為區隔
// 建立人的類別（基礎屬性：名字、年紀） 
var Person = function(name,age){
  this.name=name
  this.age=age
  // 透過prototype來進行共用函數，將sayHello模組化（物件導向）
  // this.sayHello = function(){
  //   console.log("Hello I'm" +this.name)
  // } 
}
Person.prototype.sayHello = function(){
  console.log("Hello I'm"+this.name)
}

Person.prototype.getHtml = function(){
  return`
  <div class ='person'>
    <img src="https://cdn-icons-png.flaticon.com/512/456/456212.png">
    <h3>Person: ${this.name}<br>Age:${this.age} years old</h3>
  </div>
  `
}

var Mary = new Person("Mary",20)
Mary.sayHello()

var Henry = new Person("Henry",35)
Henry.sayHello()

Mary.sayHello()
Henry.sayHello()

$("body").append(Mary.getHtml())
$("body").append(Henry.getHtml())

var Worker = function(name,age,work){
  Person.call(this,name,age)
  this.work = work
}

Worker.prototype = Object.create(Person.prototype)
Worker.prototype.constructor = Worker.constructor

Worker.prototype.sayJob = function(){
  console.log(`Hi! my name is ${this.name}, my job is ${this.work}`)
}

Person.prototype.getHtml = function(){
  return`
  <div class ='person job'>
    <img src="https://cdn-icons-png.flaticon.com/512/7545/7545205.png">
    <h3>Person: ${this.name}<br>Age:${this.age} years old<br>Job: ${this.work}</h3>
  </div>
  `
}

var Josh = new Worker("Josh", 30, "pharmacist")
Josh.sayHello()
Josh.sayJob()

$("body").append(Josh.getHtml())