import React from "react";
import Viewcards from "./Viewcards";
import articlesjson from '../articles.json'

function Apidata() {

    return (
        
      <div>
        <div className="container my-3">
            <div className="row">
            {articlesjson.map((element) => {
              return (
                <div className="col md-4" key={element.id}>
                  <Viewcards
                    title={element.title}
                    description={element.description}
                    image={element.image}
                    rating={element.rating.rate}
                    price={element.price}
                    id={element.id}
                    category={element.category}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
    );
  }

export default Apidata;
