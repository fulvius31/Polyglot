import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Flashcard.css";
import ReactCardFlip from "react-card-flip";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { BsXCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import BgLearning from "./Bg-Learning.svg";

function Flashcard() {
  const [isFlipped, setFlip] = useState(false);
  const [count, setCount] = useState(0);
  const now = (count + 1) * 10;
  const link = "https://www.google.com/images?q=read";
  const headings = [];
  const trans = [];
  const Descrp = [];

  const navigate = useNavigate();

  const addCount = (e) => {
    e.preventDefault();
    setFlip(false);
    if (count === 9) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const removeCount = (e) => {
    e.preventDefault();
    setFlip(false);
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const direct = () => {
    navigate("/Home");
  };

  const myStyle = {
    backgroundImage: `url(${BgLearning})`,
    height: "800px",
  };

  return (
    <div className="color-div">
      <h1 className="head-h1">LEARNING I</h1>
      <div className="padding-main">
        <div className="button-contianer">
          <BsXCircleFill className="btn-color" onClick={direct} />
          <ProgressBar now={now} label={`${now}%`} className="prg-bar" />
        </div>
        <div style={myStyle}>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <Card className="text-center card-width marg-top">
              <Card.Body>
                <h4 className="count">{count + 1}/10</h4>
                <Card.Img
                  variant="top"
                  src={link + headings[count]}
                  className="img-card"
                />
                <Card.Title className="card-head">{trans[count]}</Card.Title>
                <Button
                  variant="primary"
                  onClick={(e) => setFlip(true)}
                  className="flip-btn"
                >
                  Flip the card for English Word
                </Button>
                <div class="button-contianer">
                  <FaChevronCircleLeft
                    className="btn-left"
                    onClick={(e) => removeCount(e)}
                  />
                  <FaChevronCircleRight
                    className="btn-right"
                    onClick={(e) => addCount(e)}
                  />
                </div>
              </Card.Body>
            </Card>
            <Card className="text-center card-width marg-top card-width-color">
              <Card.Body>
                <h4 className="count">{count + 1}/10</h4>
                <Card.Title className="card-head card-head-color">
                  {headings[count]}
                </Card.Title>
                <p className="p-desc">{Descrp}</p>
                <Button
                  variant="primary"
                  onClick={(e) => setFlip(false)}
                  className="flip-btn flip-btn-color"
                >
                  Flip the card for Italian Word
                </Button>
                <div class="button-contianer">
                  <FaChevronCircleLeft
                    className="btn-left"
                    onClick={(e) => removeCount(e)}
                  />
                  <FaChevronCircleRight
                    className="btn-right"
                    onClick={(e) => addCount(e)}
                  />
                </div>
              </Card.Body>
            </Card>
          </ReactCardFlip>
        </div>
      </div>
    </div>
  );
}
export default Flashcard;
