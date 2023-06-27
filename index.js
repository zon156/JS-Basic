let array=[];
const inputtext= document.getElementById("input-text");
const btn1= document.getElementById("btn");
const ul1= document.getElementById("todo-ul");

if(array.length===0){
    ul1.innerText="I'm waiting for you";
}

btn1.addEventListener("click",function(){
    array.push(inputtext.value);
    memo();
    inputtext.value="";
});

function memo(){
    let memoList  ="";
    for(let i=0;i<array.length;i++){
        memoList += "<li>"+array[i]+"</li>";
    }
    ul1.innerHTML =memoList
}