

function Card({title, description, image, category, price})
{
    return(
        <div className="container">
            <img className="wine-img" src={image}  width={300}/>
            <h2 className="title"> {title} </h2>
            <p className="description"> {description}</p>
            <p className="cat"> Catégorie : {category} </p>
            <p className="price"> {price}€ </p>
            <button> Ajouter au panier </button>
        </div>
    )
}



export default Card