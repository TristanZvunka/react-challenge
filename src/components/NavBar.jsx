function NavBar() {
  return (
    <>
      <div className="navbar">
        <img className="logo" src="images/logo.png" alt="logo" width={200} />
        <ul>
          <p>Boutique</p>
          <p>Accueil</p>
          <p>A propos</p>
        </ul>
      </div>
    </>
  );
}

function Filter({setCat}) {
function catChange(event){
    setCat(event.target.value)

}


  return (
    <div className="filter-area">
    <select  onChange={catChange} >
      <option value="tous">Tous</option>
      <option value="rouge">Rouge</option>
      <option value="blanc">Blanc</option>
      <option value="rose">Rosé</option>
    </select>
    </div>

  );
}

export { NavBar, Filter };
