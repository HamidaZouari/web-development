
function add(){
    var list = document.getElementById('list');
    var item = document.getElementById('item').value;
    var li = document.createElement('li');
    var span=document.createTextNode(item);
    var button=document.createElement('button');
    button.innerHTML="Supprimer"
   if (!item)
   alert("Ajouter un objet");
   else{
    li.appendChild(span);
    list.appendChild(li);
    li.appendChild(button);
    document.getElementById('item').value=null;

}
button.addEventListener ("click", function() {
    list.removeChild(li);
  });
}
