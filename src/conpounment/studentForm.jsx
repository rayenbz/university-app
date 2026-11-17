import { useState } from "react";
import "./studentForm.css";
function StudentForm({ajouterEtudiant}) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [filiere, setFiliere] = useState("");
  const [anneeEtude, setAnneeEtude] = useState("");
  const [groupe, setGroupe] = useState("");
  const [ville, setVille] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const nouvelEtudiant = {
      nom,
      prenom,
      email,
      telephone,
      filiere,
      anneeEtude,
      groupe,
      ville,
      image
    };
console.log("nouvelle etudiant ajouter",nouvelEtudiant);
    ajouterEtudiant(nouvelEtudiant);
    setNom("");
    setPrenom("");
    setEmail("");
    setTelephone("");
    setFiliere("");
    setAnneeEtude("");
    setGroupe("");
    setVille("");
    setImage("");
  }

  function choisirImage(e) {
    const fichier = e.target.files[0];

    if (fichier) {
      setImage(URL.createObjectURL(fichier));
    }
  }

  return (
    <form onSubmit={handleSubmit} className="student-form">

      <h2>Ajouter un étudiant</h2>

      <label htmlFor="nom">Nom :</label>
      <input
        type="text"
        id="nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        required
      />

      <label htmlFor="prenom">Prénom :</label>
      <input
        type="text"
        id="prenom"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
        required
      />

      <label htmlFor="email">Email :</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="telephone">Téléphone :</label>
      <input
        type="tel"
        id="telephone"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
        required
      />

      <label htmlFor="filiere">Filière :</label>
      <select
        id="filiere"
        value={filiere}
        onChange={(e) => setFiliere(e.target.value)}
        required
      >
        <option value="">Choisir une filière</option>
        <option value="Informatique">Informatique</option>
        <option value="Gestion">Gestion</option>
        <option value="Multimédia">Multimédia</option>
      </select>

      <label htmlFor="anneeEtude">Année d'étude :</label>
      <input
        type="text"
        id="anneeEtude"
        value={anneeEtude}
        onChange={(e) => setAnneeEtude(e.target.value)}
        required
      />

      <label htmlFor="groupe">Groupe :</label>
      <input
        type="text"
        id="groupe"
        value={groupe}
        onChange={(e) => setGroupe(e.target.value)}
        required
      />

      <label htmlFor="ville">Ville :</label>
      <input
        type="text"
        id="ville"
        value={ville}
        onChange={(e) => setVille(e.target.value)}
        required
      />
      <label htmlFor="image">Photo :</label>
      <input
        type="file"
        id="image"
        accept="image/*"
        onChange={choisirImage}
      />
      <button type="submit">Ajouter</button>

    </form>
  );
}

export default StudentForm;
