import { useState } from "react";

function StudentCard(props) {
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles);
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
      <button type="button" onClick={basculerCoordonnees}>
        {coordonneesVisibles ? "Masquer" : "Afficher"}
      </button>
      <p>
        <a href={`mailto:${props.email}`}>Contacter moi</a>
      </p>
    </div>
  );
}

export default StudentCard;
