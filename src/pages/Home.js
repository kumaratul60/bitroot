import React, { useEffect, useState } from "react";

import Cards from "../components/Cards";

import { Oval } from "react-loader-spinner";

function Home() {
  const [cardsData, setCardsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const cardData = await fetch(
        "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
      );
      const apiResponse = await cardData.json();
      setCardsData(apiResponse);
      // console.log("res data", apiResponse);
      setIsLoading(false);
    };

    fetchData().catch((err) => console.log(err));
  }, []);

  return (
    <div className="container d-flex flex-wrap justify-content-center min-vh-100 my-5">
      {isLoading || !cardsData ? (
        <Oval color="#00BFFF" height={"75%"} width={150} />
      ) : (
        // <Loader />
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
