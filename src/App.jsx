import StudentCard from './conpounment/StudentCard.jsx';
import './App.css';

const etudiants = [
  {
    nom: 'Bzeouich',
    prenom: 'Rayen',
    email: 'rayenbzeouich69@gmail.com',
    telephone: '29050720',
    filiere: 'Informatique',
    annee: '2026-2027',
    groupe: 'LCS2-GLSI_D',
    ville: 'Moknine',
    image: './assets/react.svg'
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
    image: './assets/react.svg'
  },
  {
    nom: 'BEN RABEA',
    prenom: 'Youssef',
    email: 'youssef@example.com',
    telephone: '20123456',
    filiere: 'Informatique',
    annee: '2026-2027',
    groupe: 'LCS2-GLSI_D',
    ville: 'Bkalta',
    image: './assets/react.svg'
  }
];

function App() {
  return (
    <div className="cartes-container">
      {etudiants.map((etudiant) => (
        <StudentCard
          key={etudiant.email}
          prenom={etudiant.prenom}
          nom={etudiant.nom}
          email={etudiant.email}
          telephone={etudiant.telephone}
          filiere={etudiant.filiere}
          anneeEtude={etudiant.annee}
          groupe={etudiant.groupe}
          ville={etudiant.ville}
          image={etudiant.image}
        />
      ))}
    </div>
  );
}
export default App;