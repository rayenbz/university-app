import StudentCard from "./conpounment/studentCard.jsx";
import "./App.css";
import image from "./assets/react.svg";
import { useState } from "react";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      nom: "Bzeouich",
      prenom: "Rayen",
      email: "rayenbzeouich69@gmail.com",
      telephone: "29050720",
      filiere: "Informatique",
      annee: "2026-2027",
      groupe: "LCS2-GLSI_D",
      ville: "Moknine",
      image: image,
    },
    {
      id: 2,
      nom: "Boubaker",
      prenom: "Slim",
      email: "slim@example.com",
      telephone: "20123456",
      filiere: "Informatique",
      annee: "2026-2027",
      groupe: "LCS2-GLSI_D",
      ville: "Mahdia",
      image: image,
    },
    {
      id: 3,
      nom: "BEN RABEA",
      prenom: "Youssef",
      email: "youssef@gmail.com",
      telephone: "20123456",
      filiere: "Informatique",
      annee: "2026-2027",
      groupe: "LCS2-GLSI_D",
      ville: "Bkalta",
      image: image,
    },
  ]);

  function ajouterEtudiant() {
    const nouvelEtudiant = {
      id: Date.now(),
      nom: "Bzeouich",
      prenom: "Bilel",
      telephone: "29334587",
      filiere: "Informatique",
      annee: "2026-2027",
      groupe: "LCS2-GLSI_D",
      ville: "Bkalta",
      email: "bilelbzeouich@gmail.com",
      image: image,
    };
    setEtudiants([...etudiants, nouvelEtudiant]);
  }

  function supprimerEtudiant(id) {
    setEtudiants((liste) => liste.filter((etudiant) => etudiant.id !== id));
  }

  function modifierEtudiant(id, valeurs) {
    setEtudiants((liste) =>
      liste.map((etudiant) =>
        etudiant.id === id ? { ...etudiant, ...valeurs } : etudiant
      )
    );
  }

  return (
    <>
      <div className="actions">
        <button type="button" onClick={ajouterEtudiant}>
          + Ajouter un etudiant
        </button>
      </div>
      <div className="cartes-container">
        {etudiants.map((etudiant) => (
          <StudentCard
            key={etudiant.id}
            id={etudiant.id}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.annee}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
            email={etudiant.email}
            onDelete={supprimerEtudiant}
            onModify={modifierEtudiant}
          />
        ))}
      </div>
    </>
  );
}

export default App;
