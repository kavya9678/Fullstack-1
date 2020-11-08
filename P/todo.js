//selector
var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");
//eventHandler
todoButton.onclick = create;
todoList.onclick = checkdelete;

//Function
function create(e){
    e.preventDefault();  //i.e. don't submit form-data to server

    var newDiv= document.createElement("div");
    newDiv.classList.add("todo");

    var newLi= document.createElement("li");
    newLi.classList.add("todo-item");
    newLi.innerHTML= todoInput.value;
     if(todoInput.value.length == 0){
         alert("Please input some text");
         newLi.innerHTML= none;
     }
 // li is created in div therefore it should be made child of div because there is a hierarchial relationship
     newDiv.appendChild(newLi);
   
     var checkbtn= document.createElement("button");
     checkbtn.classList.add("check-btn");
     checkbtn.innerHTML= '<i class="fa fa-check"></i>';
     newDiv.appendChild(checkbtn);

     var deletebtn= document.createElement("button");
     deletebtn.classList.add("delete-btn");
     deletebtn.innerHTML= '<i class="fa fa-trash"></i>';
     newDiv.appendChild(deletebtn);

     todoList.appendChild(newDiv);
     todoInput.value ="";
}

function checkdelete(e){

    var item= e.target;
    if(item.classList[0]=="delete-btn"){
        var parent =item.parentNode;
        parent.remove();
    }
    if(item.classList[0]=="check-btn"){
        var parent =item.parentNode;
        //we could also have used add instead of toggle but here we wanted to linethrough on text on clicking check and line should be removed n clicking it again but in add we can't remove that line
        parent.classList.toggle("completed"); //toggle is used to add or delete class,on first click it adds class, on second click it deletes class
    }
}
