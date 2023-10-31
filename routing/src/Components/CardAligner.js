import React, { useContext } from "react";
import "../Components/styling.css"
import { Link } from "react-router-dom";
import { CartContext } from "./Navigation";
const CardData = ({ productData }) => {
  const cardData = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the first card."
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card."
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card."
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is the fourth card."
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card."
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card."
    },
   ];
  const cartConsumer = useContext(CartContext)
 const cardsPerRow = 4;
const rows = [];
  for (let i = 0; i < productData.length; i += cardsPerRow) {
    const row = productData.slice(i, i + cardsPerRow);
    rows.push(row);
  }
return (
    <div className="container">
      {rows.map((row, rowIndex) => (
        <div className="row" key={rowIndex} style={{ marginTop: 30 }} >
          {row.map((card) => (
            <div className="col" key={card.id}>
              <div className="card">
                <div className="card-body">
                  <p className="card-title">{card.title.slice(0, 15)}</p>
                  <img src={card.image} alt={card.id} width={100} height={100} />
                  <h5 className="card-title">{card.price}</h5>
                  <h5 className="card-title">{card.rating.rate}</h5>
                  <button style={{ marginTop: "10px" }}>
                    <Link to={`/product/${card.id}`}>

                      View Products
                    </Link>
                    <button style={{ marginTop: 10 }} onClick={() => cartConsumer.addItemsToCart(card)}>Add To Cart</button>
                    

                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardData;
