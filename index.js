function add() {
   const input = document.querySelector("#todoInput");

   if(!input) {
    alert("값을 입력해주세요.")
    return 
   }

   const value = input.value;
   //굳이 해주는 이유?

   if(value.trim()=== ""){
    alert
   }


   const li = document.createElement("li");
   li.className="todo-item";

   const span = document.createElement("span");
   span.innerText=value; //value여기에서 쓰려고?

   const button = document.createElement("button");
   button.className="update-btn";
   button.innerText="수정";
   button.id = "updateButton";

   const button2 = document.createElement("button");
   
   button2.className="delete-btn";
   button2.innerText="삭제";

   li.append(span);
   li.append(button);
   li.append(button2);

   //수정
   button.addEventListener("click",function(){
      onClickUpdate(li, span, button);
   });



   //삭제
   button2.addEventListener("click", deleteItem);

   const ul = document.querySelector("#todo-list");
   ul.append(li);
   input.value=""

}


function deleteItem() {
   this.parentElement.remove()

}

function onClickUpdate(li, span, button){
   console.log("update")

   span.style.display="none";
   button.style.display="none";


   const input_update = document.createElement("input");
   input_update.value = span.innerText;

   

   const buttonDone = document.createElement("button");
   buttonDone.className="update-btn";
   buttonDone.innerText="완료";

   buttonDone.addEventListener("click", updateItem);
   


   li.prepend(buttonDone);
   li.prepend(input_update);


}

function updateItem(){
   const span = this.parentElement.getElementsByTagName("span")[0];
   const input_update = this.parentElement.getElementsByTagName("input")[0];
   const button = this.parentElement.querySelector("#updateButton");

   span.innerText=input_update.value;
   span.style.display="inline";


   input_update.remove();
   this.remove();
   button.style.display="block";
}


