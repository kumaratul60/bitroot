import React, { useEffect, useState } from "react";

import Cards from "../components/Cards";
import loader from "../assets/loader.gif";

function Home() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cardData = await fetch(
        "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
      );
      const apiResponse = await cardData.json();
      setCardsData(apiResponse);
      // console.log("res data", apiResponse);
    };

    fetchData().catch((err) => console.log(err));
  }, []);

  return (
    <div className="container d-flex flex-wrap justify-content-center min-vh-100 my-5">
      {!cardsData ? (
        <img src={loader} alt="loading" />
      ) : (
        cardsData?.map((cardData, index) => (
          <div key={index}>
            <Cards cardData={cardData} />
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
