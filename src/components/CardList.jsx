import Card from "./Card"
import Data from "../data/data.json"

function Cardlist ({cat}){

        return (
           <div className="cards">
            { Data.map((element) => cat=== "tous"?
            <Card
            key={element.id}
            title={element.title}
            description={element.description}
            image={element.image}
            category={element.category}
            price={element.price}
          /> :
             element.category === cat ? (
                
          <Card
            key={element.id}
            title={element.title}
            description={element.description}
            image={element.image}
            category={element.category}
            price={element.price}
          />): "" )}
          </div> 
        )};



export default Cardlist