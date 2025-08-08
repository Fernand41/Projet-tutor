<?php
$servername = "localhost";
$username = "root";
$password = " ";


try{
$bd = new PDO("mysql:host=$servername;dbname=bitcoin_education", $username, $password);
$bd->SetAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
echo  "connexion réussi !";
}

catch (PDOException $e){
    echo "Error : ".$e->getMessage();

}
$nom="fernand";

$bd->exec("INSERT INTO utilisateur VALUES (0, '$nom', 'marilucmetchihoungbe@gmail.com')");
?>
