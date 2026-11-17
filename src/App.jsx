import StudentCard from "./conpounment/studentCard.jsx";
import "./App.css";
import image from "./assets/react.svg";
import { useState } from "react";
import StudentForm from "./conpounment/studentForm.jsx";
function App() {
  const [etudiantModifier,setEtudiantModifier]=useState(null);
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

  function ajouterEtudiant(nouvelEtudiant){
    const etudiantAvecId={
      ...nouvelEtudiant,
      id:Date.now(),
    }
    setEtudiants((ancinesEtudiants) => [...ancinesEtudiants,etudiantAvecId]);
  }

  function supprimerEtudiant(id) {
    setEtudiants((liste) => liste.filter((etudiant) => etudiant.id !== id));
  }

  function modifierEtudiant(etudiant) {
      setEtudiantModifier(etudiant);
  }

  return (
    <>
      <StudentForm 
          key={etudiantModifier ? etudiantModifier.id :"nouveau"} 
          ajouterEtudiant={ajouterEtudiant}
          etudiantModifier={etudiantModifier} />
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
