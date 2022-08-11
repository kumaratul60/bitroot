import React from "react";
import { Modal } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import "../styles/Cards.css";

const CardModal = ({ showModal, closeCardModal, cardDetails }) => {
  return (
    <div>
      <Modal
        show={showModal}
        onHide={closeCardModal}
        // backdrop="static"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Card style={{ width: 27 + "rem" }} className="mx-3">
            <Card.Img
              variant="top"
              src={cardDetails.thumbnail.large}
              width="20"
              height="250"
            />

            <Card.Body className="mb-1">
              <Card.Title className="mb-3 fw-bolder">
                {cardDetails.title}
              </Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                {cardDetails.content}
              </Card.Text>
            </Card.Body>

            <footer className="mb-2">
              <div className="footer-data">
                <div>
                  <img
                    variant="top"
                    src={cardDetails.author.avatar}
                    className="card-modal-image"
                    alt="img"
                  />
                  {cardDetails.author.name}-{cardDetails.author.role}
                </div>
              </div>
            </footer>
          </Card>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CardModal;
