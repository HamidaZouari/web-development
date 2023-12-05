function affichage(){
    const pseudo=document.getElementById("pseudo").value;
    const email=document.getElementById("email").value;
    const mdp=document.getElementById("mdp").value;


    if(!pseudo | !email | !mdp){
    alert("souvenez-vous de vos informations");}
    else
    {
        alert("Vous etes connecté antant que :"+pseudo+"\nVotre mot de passe est :"+mdp+"\nEt votre E-mail est:"+email)
    }
    }
    function Effacer(){
        const pseudo=document.getElementById("pseudo");
        const mdp=document.getElementById("mdp");
        const email=document.getElementById("email");

        pseudo.value ="";
        mdp.value ="";
        email.value ="";


  }
  function close(){
 window.close();
}
