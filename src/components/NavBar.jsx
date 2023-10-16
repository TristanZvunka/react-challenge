function NavBar() {
  return (
    <>
      <div className="navbar">
        <img src="images/logo.png" alt="logo" width={200} />
        <ul>
          <li>Boutique</li>
          <li>Accueil</li>
          <li>A propos</li>
        </ul>
      </div>
    </>
  );
}

function Filter() {
function catChange(event){
    console.log(event.target.value)

}


  return (
    <select className="filter-area" onChange={catChange} >
      <option value="tous">Tous</option>
      <option value="rouge">Rouge</option>
      <option value="blanc">Blanc</option>
      <option value="rose">Rosé</option>
    </select>
  );
}

export { NavBar, Filter };
