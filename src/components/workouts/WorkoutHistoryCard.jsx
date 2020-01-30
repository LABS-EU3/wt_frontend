import React from "react";
import { Link } from "react-router-dom";

import DefaultImage from "../../images/login_image.png";
import { WorkoutHistoryCard as StyledWorkoutHistoryCard } from "./WorkoutHistoryStyle";

function WorkoutHistoryCard({ workout, onOpen, history }) {
  const dateCompleted = new Date(workout.endDate).toLocaleDateString();
  console.log(workout);
  return (
    <StyledWorkoutHistoryCard>
      <div className="history">
        <section className="history-detail" onClick={onOpen}>
          <div className="history-image">
            <img
              src={workout.picture || DefaultImage}
              alt="workout thumbnail"
            />
          </div>

          <div className="history-content">
            <p className="workout-name">{workout.workoutId.name}</p>
            <p>
              {dateCompleted} -{" "}
              <strong style={{ color: "green" }}>COMPLETED</strong>
            </p>

            <div className="flex">
              <p>{workout.workoutId.intensity}</p>
              <p>{workout.workoutId.avgTime}</p>
            </div>
          </div>
        </section>
        <Link to={`/workout/${workout.workoutId.id}`}>
          <p className="link">View Details</p>
        </Link>
      </div>
    </StyledWorkoutHistoryCard>
  );
}

export default WorkoutHistoryCard;
