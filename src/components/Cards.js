import React, { useState } from "react";
import Card from "react-bootstrap/Card";

import { months } from "./Months";
import CardModal from "./CardModal";

import "../styles/Cards.css";

function Cards({ cardData }) {
  const [showModal, setShowModal] = useState(false);
  const showCardModal = () => {
    setShowModal(true);
  };
  const closeCardModal = () => {
    setShowModal(false);
  };
  let date = new Date(cardData.date * 1000);
  let month = date.getMonth();
  let today = date.getDate();
  let year = date.getFullYear();

  return (
    <>
      <Card style={{ width: 27 + "rem", cursor: "pointer" }} className="m-2">
        <Card.Img
          variant="top"
          src={cardData.thumbnail.large}
          width="20"
          height="250"
          onClick={showCardModal}
        />
        <Card.Body className="mb-1">
          <div className="card-dot">
            <div className="card-dot-blue"></div>
            <div className="card-dot-orange"></div>
          </div>
          <Card.Title className="mb-3 fw-bolder" onClick={showCardModal}>
            {cardData.title}
          </Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {cardData.content}
          </Card.Text>
        </Card.Body>
        <footer className="mb-3">
          <div className="footer-data">
            <div>
              {cardData.author.name}-{cardData.author.role}
            </div>
            <div>
              {months[month]} {today},{year}
            </div>
          </div>
        </footer>
      </Card>
      <CardModal
        cardDetails={cardData}
        showModal={showModal}
        closeCardModal={closeCardModal}
      />
    </>
  );
}

export default Cards;
