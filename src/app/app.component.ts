/*Utilisation d'une librairie pour 
utiliser cette class en composant
*/
import { Component } from '@angular/core';
import { format } from 'path';
/*
Décorateur
Précise des informations sur notre composant
*/

// Déclarer une classe comme structure de base pour objet et objetDetail
class Produit{
  nom : string; 
  description? : string; 
  prix?: number; 
  couleur? : string;
}

@Component({
  /*
  Sélecteur est un identifiant unique
  Détermine le nom de la balise permettant
  d'utiliser ce composant
  */
  selector: 'app-root',
  /*
  Partie Visible de notre composant
   */
  templateUrl: './app.component.html',
  /*
  Style CSS, un tableau car on peut charger plusieurs feuilles de style
  styleUrls: ['./app.component.css', './app.component-resp.css']
  */
  styleUrls: ['./app.component.css']
})
  /*
  export : permet d'accéder à ce composant à l'extérieur
  class : contient les données du composant
  Représente le modèle
  */
export class AppComponent {
constructor(){
  console.log('test'); 
  console.log(this.produitsBoutique);
  console.log(this.produitsBoutique[2].nom); 
}

  // Déclarer une variable sans mot clef var
  // Cette variable est accessible avec {{ }}
  title = 'storeApp';
  // Cet objet est accessible avec {{cle.valeur}} dans la vue;
  produit: Produit = {
    nom  :"Iphone", 
    couleur : "Jaune", 
    description : "SmartPhone dernière génération"
  }

  // Placeholder
  placeholder : string = "test";

  // DECLARATION D'UNE VARIABLE GLOBALE
  objetDetail : Produit = new Produit(); 

  
  produitsBoutique : Produit[] =[
    {
      nom  :"Iphone", 
      couleur : "Jaune", 
      description : "SmartPhone Iphone"
    },
    {
      nom  :"Samsung", 
      couleur : "Blanc", 
      description : "Samsung Galaxy A21s 4G 32Go"
    },
    {
      nom  :"Huawei P30 Lite", 
      couleur : "Noir", 
      description : "Triple caméra avec capteur principal de 48MP"
    }
  ]; 
  /*FERMETURE DU TABLEAU AVEC ; */ 

  onAddingProduct(event){
    console.log(event)
    console.log(event.target.value);
    // Affiche en tant réél
    this.objetDetail.nom = event.target.value;
  }

  onCreateProduct(){
    console.log('add', this.objetDetail.nom)
    // Création d'un nouveau objet avec la classe Produit
    let itemAdd = new Produit();
    itemAdd.nom = this.objetDetail.nom;
    this.produitsBoutique.push(itemAdd);
    console.log(this.produitsBoutique); 
    form.reset(); 
  }

  // onSubmit(){
  //   this.form.reset(); 
  // }


  detailProduit(objet : Produit){
   console.log(objet);
   // Problématique, on ne peut pas faire objet.nom dans l'HTML, objet n'existe pas.
   // On va stocker objet dans une variable globale objetDetail
   // This car on demande d'aller chercher la variable globale objetDetail dans cette class
   // ligne 58
   // Cette variable objectDetail pourra être utilisée dans le jumbotron
   // sous la forme {{objetDetail.nom}}
   this.objetDetail  = objet; 
  }

}
/*On peut accéder à toutes les informations de la classe
dans la partie Vue, c'est-à-dire HTML
 */