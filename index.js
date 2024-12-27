function add() {
   const input = document.querySelector("#todoInput");

   if(!input) {
    alert("값을 입력해주세요.")
    return 
   }

   const value = input.value;

   if(value.trim()=== ""){
    alert
   }

   //체크박스
   const checkbox = document.createElement("input");
   checkbox.type="checkbox";
   checkbox.className ="checkbox-style";
   checkbox.id = "checkboxId";

   const checkboxLabel = document.createElement("label");
   checkboxLabel.htmlFor = "checkboxId";



   const li = document.createElement("li");
   li.className="todo-item";

   const span = document.createElement("span");
   span.innerText=value; 

   const button = document.createElement("button");
   button.className="update-btn";
   button.innerText="수정";
   button.id = "updateButton";

   const button2 = document.createElement("button");
   
   button2.className="delete-btn";
   button2.innerText="삭제";
   button.id = "deleteButton";

   button.style.display="none";
   button2.style.display="none";

   checkbox.addEventListener("change", function(){
      if(checkbox.checked){
         button.style.display="inline-block";
         button2.style.display="inline-block";
      }else{
         button.style.display="none";
         button2.style.display="none";
      }
   })

   li.append(checkbox);
   li.append(checkboxLabel);
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

   const checkbox = li.querySelector("input[type='checkbox']"); 
   checkbox.checked = false; 

   const checkboxLabel = li.querySelector("label");
   checkboxLabel.style.display = "none";


   const input_update = document.createElement("input");
   input_update.value = span.innerText;
   input_update.className="input-update";

   

   const buttonDone = document.createElement("button");
   buttonDone.className="update-btn";
   buttonDone.innerText="완료";
   checkbox.checked = false; 

   buttonDone.addEventListener("click", updateItem);
   


   li.prepend(buttonDone);
   li.prepend(input_update);


}

function updateItem(){
   const span = this.parentElement.getElementsByTagName("span")[0];
   const input_update = this.parentElement.getElementsByTagName("input")[0];
   const button = this.parentElement.querySelector("#updateButton");
   const button2 = this.parentElement.querySelector("#deleteButton");
   const checkbox = this.parentElement.querySelector("input[type='checkbox']");
   const checkboxLabel = this.parentElement.querySelector("label");

   span.innerText=input_update.value;
   span.style.display="inline";


   input_update.remove();
   this.remove();
   // button.style.display="block";


   checkbox.checked = false; 
   checkboxLabel.style.display = "inline-block"; 

   button.style.display="none";
   button2.style.display="none";
}



console.log("11111");

function getData(){

   return new Promise(function(resolve,reject){
      setTimeout(function(){
         resolve("2222");
      },0);
   });
}

getData().then(function(result){
   console.log()

})


function getData(){

   return new Promise(function(resolve, reject){
      setTimeout(function() {
         resolve("22222");
   }, 0);
  
   
   });

}


console.log("33333");




function getData(){
   return new Promise(function(resolve,reject){
      setTimeout(function(){
         resolve("2222")
      },0)
   })
}


async function asyncGetData(){
   await getData();

}



// function getData() {

//    return new Promise(function(reslove, reject) {
//       setTimeout(function() {
//          reslove("22222222")
//       }, 0);
//    });

// }

// function getData2() {
//    setTimeout(function() {
//       console.log("2222222")
//    }, 0)
// }

// async function asyncGetData() {
//    await getData();
//    await getData2();
//    console.log("3333333");
// }

// console.log("11111111");

// getData2()


// getData().then(function(result) {
//    console.log(result);
//    console.log("333333");
// }).catch(function(error) {
//    console.log(error);
// })









