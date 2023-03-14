
<?php
$action =(int)readline ("Entrez votre action : (1:attaquer, 2:défendre, 3:passer mon tour)");
switch($action) {
    case 1:
        echo "j'attaque";
        break;
    case 2:
        echo "je défends";
        break;
    case 3:    
        echo "passe mon tour";
        break;
    default :
    echo "commande inconnue";    
}

   ?>
   //------------------------------------->>>
