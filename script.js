const itemName=document.getElementById("it-name");
const deadline=document.getElementById("deadline");
const priority=document.getElementById("priority");
const addbtn=document.getElementById("add");

const second=document.getElementById("second");
const third=document.getElementById("third");
const fourth=document.getElementById("fourth");
const table=document.getElementById("table");
const tbody=document.getElementById("tbody");
const tbody1=document.getElementById("tbody1");
var todos = [];

var c=0;
var p=0;
let flag1=0;


addbtn.addEventListener("click",addItems =()=>{
    console.log(itemName.value);
    todos.push(itemName.value);
    todos.push(deadline.value);
    todos.push(priority.value);
    
    localStorage.setItem("todos", JSON.stringify(todos));
    var storedTodos = JSON.parse(localStorage.getItem("todos"));
    console.log(storedTodos);
    var today = new Date();
    console.log("Todays date is :",today);
         var a=0;
        // Get the task's deadline
        var taskDate = new Date(todos[1]);
        console.log("task Date is : ",taskDate);
        // Check if the task's deadline is today
        if (taskDate.getDate() == today.getDate() && 
            taskDate.getMonth() == today.getMonth() && 
            taskDate.getFullYear() == today.getFullYear())
        {
            console.log("YES");
            a=1;
        }
     
    var tr = document.createElement("tr");
    tbody.appendChild(tr);
    var td1= document.createElement("td");
    tr.appendChild(td1);
    p++;
    td1.innerHTML=p+".  "+todos[c++];

    var td2= document.createElement("td");
    td2.innerHTML=todos[c++];
    tr.appendChild(td2);

    var td3= document.createElement("td");
    td3.innerHTML="Priority:"+todos[c++];  
        
   tr.appendChild(td3);

   var td4= document.createElement("td");     
   tr.appendChild(td4);
   var td5= document.createElement("td");     
   tr.appendChild(td5);
    
   var btn1=document.createElement("button");
   
   var img1=document.createElement("img");
   img1.src="./img1.png";
   btn1.appendChild(img1);
   td4.appendChild(btn1);
   

   var btn2=document.createElement("button");

   var img2=document.createElement("img");
   img2.src="./img2.png";
   btn2.appendChild(img2);
   td5.appendChild(btn2);

   
})