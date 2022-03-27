import React from "react";
import SingleProduct from "../components/SingleProduct";
import data from "../data.json";

function Home() {
  return (
    <div className="home">
      <div className="productContainer">
        {data.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
}

export default Home;
