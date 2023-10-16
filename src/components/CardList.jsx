import Card from "./Card"
import Data from "../data/data.json"

function Cardlist (){

        return (
           <div>
            { Data.map((element) => (
                
          <Card
            key={element.id}
            title={element.title}
            description={element.description}
            image={element.image}
            category={element.category}
            price={element.price}
          />))}
          </div> 
        )};



export default Cardlist