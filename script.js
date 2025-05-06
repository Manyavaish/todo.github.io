const addButton = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let list=[]
function add(){
    const item =taskInput.value;
    if(item){
        list.push(item);
        show(item);
        ls(list);
        taskInput.value="";
    }
}
function show(item){
    const el=document.createElement('li');
    el.innerText=item;

    const button=document.createElement('button');
    button.innerText='DELETE';
    button.style.backgroundColor='red';
    button.style.border='none';
    button.style.fontSize='18px';
    button.style.color='white';
    button.style.padding='8px';
    button.style.borderRadius='5px';
    button.addEventListener('click',function(event){      
        const listitem=event.target.parentElement;
        taskList.removeChild(listitem);  
        list=list.filter(i => i !== item);
        ls(list);
    });
    
    el.appendChild(button);
    taskList.appendChild(el);

}
function ls(list){
    const str=JSON.stringify(list);
    localStorage.setItem('tasks',str);         
}
function getls(){
    const task=localStorage.getItem('tasks');
    if (task) {
        list = JSON.parse(task);
        list.forEach((item)=>{
            show(item);
        })

    }
}
addButton.addEventListener('click',add);
window.addEventListener('DOMContentLoaded',getls)






























