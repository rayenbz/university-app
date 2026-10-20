function StudentCard(props) {
  return (
    <div className="cart">
      <h3>Fiche etudiant</h3>
      <img src={props.image} alt='error' width={50} height={50} />
      <p>Nom : {props.nom}</p>
      <p>Prenom : {props.prenom}</p>
      <p>Email : {props.email}</p>
      <p>Telephone : {props.telephone}</p>
      <p>Filiere : {props.filiere}</p>
      <p>Annee d'etude : {props.anne}</p>
      <p>Groupe :{props.groupe}</p>
      <p>Ville : {props.ville}</p>
    </div>
  );
}

export default StudentCard;
