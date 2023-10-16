

function Card({title, description, image, category, price})
{
    return(
        <div className="container">
            <img src={image}  width={300}/>
            <h2> {title} </h2>
            <p> {description}</p>
            <p> Catégorie : {category} </p>
            <p> {price}€ </p>
        </div>
    )
}



export default Card