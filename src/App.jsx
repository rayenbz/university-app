import image from './assets/react.svg'
function App() {
  const fich={
      nom:'rayen',
      prenom:'bzeouich',
      email:'rayenbzeouich69@gmail.com',
      telephone:'29050720',
      fiere:'Informatique',
      anne:'2026-2027',
      groupe:'LCS2-GLSI_D',                 
      ville:'moknine',
      img:image
  };
  
  return (
    <div>
      <h1>Fiche etudiant</h1>
      <img src={fich.img} alt='eroor' width={80} height={80}></img>
      <p>Nom : {fich.nom}</p>
      <p>Prenom : {fich.prenom}</p>
      <p>Email : {fich.email}</p>
      <p>Telephone : {fich.telephone}</p>
      <p>Filiere :{fich.fiere}</p>
      <p>Annee d'etude :{fich.anne}</p>
      <p>Groupe :{fich.groupe}</p>
      <p>Ville :{fich.ville}</p>
      <a href={'mailto:${fich.email}'}>email</a>
      
    </div>
  );
}
export default App;
