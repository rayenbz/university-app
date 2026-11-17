import { useState } from "react";

function StudentCard(props) {
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  function modifier() {
    const champ = prompt(
      "Quel champ voulez-vous modifier ? (nom, prenom, filiere, anneeEtude, groupe, ville, email, telephone)"
    );
    if (!champ) return;

    const valeur = prompt("Nouvelle valeur pour " + champ + " :");
    if (valeur === null || valeur === "") return;

    props.onModify(props.id, { [champ]: valeur });
  }

  return (
    <div className="carte">
      <h2>Fiche etudiant</h2>
      <img src={props.image} alt={`${props.prenom} ${props.nom}`} />
      <p>Nom : {props.nom}</p>
      <p>Prenom : {props.prenom}</p>
      <p>Filiere : {props.filiere}</p>
      <p>Annee d'etude : {props.anneeEtude}</p>
      <p>Groupe : {props.groupe}</p>
      <p>Ville : {props.ville}</p>

      {coordonneesVisibles && (
        <>
          <p>Email : {props.email}</p>
          <p>Telephone : {props.telephone}</p>
        </>
      )}

      <div className="carte-actions">
        <button onClick={() => setCoordonneesVisibles(!coordonneesVisibles)}>
          {coordonneesVisibles ? "Masquer" : "Afficher"}
        </button>
        <button className="btn-modifier" onClick={() => modifier(props.etudiant)}>
          Modifier
        </button>
        <button className="btn-supprimer" onClick={() => props.onDelete(props.id)}>
          Supprimer
        </button>
      </div>

      <p>
        <a href={`mailto:${props.email}`}>Contacter moi</a>
      </p>
    </div>
    
  );
}

export default StudentCard;