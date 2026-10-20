import StudentCard from './conpounment/StudentCard.jsx';
import './App.css';
import image from './assets/react.svg';
import { useState } from 'react';


function App() {
  const [etudiants,setEtudiands]=useState([
    {
    nom: 'Bzeouich',
    prenom: 'Rayen',
    email: 'rayenbzeouich69@gmail.com',
    telephone: '29050720',
    filiere: 'Informatique',
    annee: '2026-2027',
    groupe: 'LCS2-GLSI_D',
    ville: 'Moknine',
    image: image
  },
  {
    nom: 'Boubaker',
    prenom: 'Slim',
    email: 'slim@example.com',
    telephone: '20123456',
    filiere: 'Informatique',
    annee: '2026-2027',
    groupe: 'LCS2-GLSI_D',
    ville: 'Mahdia',
    image: image
  },
  {
    nom: 'BEN RABEA',
    prenom: 'Youssef',
    email: 'youssef@gmail.com',
    telephone: '20123456',
    filiere: 'Informatique',
    annee: '2026-2027',
    groupe: 'LCS2-GLSI_D',
    ville: 'Bkalta',
    image: image
  }
    ]);
function ajouteEtudiants(){
    const nouvelEtudiants = {
    nom:'bzeouich',
    prenom:'bilel',
    tel:'29334587',
     filiere: 'Informatique',
    annee: '2026-2027',
    groupe: 'LCS2-GLSI_D',
    ville: 'Bkalta',
    email:'bilelbzeouich@gmail.com',
    image:image
  };
  setEtudiands([...etudiants,nouvelEtudiants]);
  }

  return (
    <>
    <div className="cartes-container">
      {etudiants.map((etudiant) => (
        <StudentCard
          key={etudiant.email}
          prenom={etudiant.prenom}
          nom={etudiant.nom}
          telephone={etudiant.telephone}
          filiere={etudiant.filiere}
          anneeEtude={etudiant.annee}
          groupe={etudiant.groupe}
          ville={etudiant.ville}
          image={etudiant.image}
          email={etudiant.email}
        />
      ))}
    </div>
      <div className='actions'>
      <button onClick={ajouteEtudiants}>+ ajouter un etudiant</button>
    </div>
    </>
  );
}
export default App;