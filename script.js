function listadding(){
    var inp1 = document.getElementById('new-task').value;
    var il = document.getElementById('incomplete-tasks');
    il.innerHTML += '<li>'+'<input type="checkbox" class="chk chkbox">'+'<label>'+inp1+'</label>'+'<input type="text">'+'<button class="edit">'+'Edit'+'</button><button class="delete">Delete</button></li>';
    document.getElementById('new-task').value = " ";
}
function check(event){
    if(!event.target.classList.contains('chk')){
        return;
    }
    document.getElementById('completed-tasks').append(event.target.closest('li'));
}
function uncheck(event){
    if(!event.target.classList.contains('chk')){
        return;
    }
    document.getElementById('incomplete-tasks').append(event.target.closest('li'));
}
function del(e){
    if(!e.target.classList.contains('delete')){
        return;
    }
    e.target.closest('li').remove();
}
function updateit(evt){
    evt.target.closest('li').children[1].innerText = document.getElementById('new-task').value;
    document.getElementById('btn').innerHTML = "Add";
    document.getElementById('new-task').value = " ";
    document.getElementById('btn').onclick = function (){listadding()};
}
function edit(evt){
    if(!evt.target.classList.contains('edit')){
        return;
    }  
    document.getElementById('new-task').value = evt.target.closest('li').children[1].innerText;
    document.getElementById('btn').innerHTML = "Update";
    document.getElementById('btn').onclick = function (){updateit(evt)};
}
document.getElementById('incomplete-tasks').addEventListener("click",check);
document.getElementById('completed-tasks').addEventListener("click",uncheck);
document.getElementById('completed-tasks').addEventListener("click",del);
document.getElementById('incomplete-tasks').addEventListener("click",del);
document.getElementById('incomplete-tasks').addEventListener("click",edit);
document.getElementById('completed-tasks').addEventListener("click",edit);



