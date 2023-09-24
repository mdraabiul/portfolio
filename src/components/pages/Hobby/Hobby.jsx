import React from "react";
import "./hobby.css";
import {
  badminton,
  book,
  cricket,
  food,
  salad,
  soccer,
  suitcase,
  travelling,
} from "../../icons";

import { aboutHobby } from "../../constants";

const Hobby = () => {
  const icons = [
    badminton,
    book,
    cricket,
    food,
    salad,
    soccer,
    suitcase,
    travelling,
  ];
  return (
    <>
      <div className="hobby__header">
        <h1>Hobbies & Interest</h1>
      </div>
      <section className="hobby">
        <div className="hobby__left">
          {icons.map((icon, index) => (
            <div key={index} className="hobby__left-icon">
              <img src={icon} alt={`icon-${index}`} />
            </div>
          ))}
        </div>
        <div className="hobby__right">
          <p>{aboutHobby}</p>
        </div>
      </section>
    </>
  );
};

export default Hobby;
