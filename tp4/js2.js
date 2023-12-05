
function validerForm(){
    //or textContent
    var nom = document.getElementById('Champ').value;
    if(!nom)
    document.getElementById("erreur").innerHTML = " Le champ ne peut pas etre valide";
    else
    alert("Le formulaire peut etre envoyé")
    
}