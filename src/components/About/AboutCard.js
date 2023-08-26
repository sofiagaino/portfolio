//SISTEMATO//
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Ciao a tutti, sono Sofia Gaino vengo da Abbiategrasso, un paese in provincia di Milano, Italia.
            <br />
            <br />
            Sto frequentando l'ultimo anno del corso di Businnes Software Development presso la JobsAcademy 
            e il primo di ingegneria gestionale presso UniNettuno.
            <br />
            <br />
            A parte programmarae mi piace anche...
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Viaggiare
            </li>
            <li className="about-activity">
              <ImPointRight /> Fare attività fisica
            </li>
            <li className="about-activity">
              <ImPointRight /> Leggere
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
