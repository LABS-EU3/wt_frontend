import React from "react";
import { ExercisesStyle, ExerciseCardStyle } from "./ExerciseStyle";

function ExerciseCard() {
  return (
    <ExerciseCardStyle>
      <div className="exerciseCard-container">
        <div className="exerciseCard-header">
          <h2>Total Upper Body Exercise</h2>
          <p>Created by amira adediran</p>
        </div>
        <div className="exerciseCard-banner">
          <img src="http://static-10.sinclairstoryline.com/resources/media/e87328a1-cca8-408f-b0bf-a56df96b2ea2-large16x9_GettyImages912603144.jpg?1546036005283" />
        </div>
        <div className="exerciseCard-information">
          <div className="exerciseCard-instruction">
            <h3>Instructions</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              illum soluta minus magni vitae incidunt sequi, dolorum nisi
              temporibus, dicta fugit eaque! Aliquam quas dolorem atque deserunt
              officia ratione culpa tempora excepturi, itaque velit aspernatur,
              consectetur labore quo iure voluptatum aut, magni numquam
              necessitatibus eos! Exercitationem animi consequatur autem et?
            </p>
          </div>
          <div className="exerciseCard-data">
            <div className="exerciseCard-data-tab">
              <p>Difficulty</p>
              <p className="exerciseCard-data-value">Intermediate</p>
            </div>
            <div className="exerciseCard-data-tab">
              <p>Types</p>
              <p className="exerciseCard-data-value">Strength, Weight Loss</p>
            </div>
            <div className="exerciseCard-data-tab">
              <p>Equipment</p>
              <p className="exerciseCard-data-value">Dumbell, Bench</p>
            </div>
            <div className="exerciseCard-data-tab">
              <p>Muscles</p>
              <p className="exerciseCard-data-value">Chest, Biceps</p>
            </div>
          </div>
        </div>
      </div>
    </ExerciseCardStyle>
  );
}

export default ExerciseCard;
