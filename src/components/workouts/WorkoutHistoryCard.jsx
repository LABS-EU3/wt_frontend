import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share";

import DefaultImage from "../../images/login_image.png";
import { WorkoutHistoryCard as StyledWorkoutHistoryCard } from "./WorkoutHistoryStyle";

function WorkoutHistoryCard({ workout, onOpen, history }) {
  const dateCompleted = new Date(workout.endDate).toLocaleDateString();

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
        <div className="social-share">
          <span>
            <FacebookShareButton
              url={`https://app.trackdrills.com/workout/${workout.workoutId.id}`}
              hashtag="#trackdrills"
              quote="Get in!"
            >
              <FacebookIcon size={35} round={true} />
            </FacebookShareButton>
          </span>
          <span>
            <TwitterShareButton
              url={`https://app.trackdrills.com/workout/${workout.workoutId.id}`}
              hashtags={["trackdrills"]}
              title="Get in!"
            >
              <TwitterIcon size={35} round={true} />
            </TwitterShareButton>
          </span>
          <span>
            <LinkedinShareButton
              url={`https://app.trackdrills.com/workout/${workout.workoutId.id}`}
              title="Get in!"
              summary="Enter dynamic summary here"
              source="https://app.trackdrills.com"
            >
              <LinkedinIcon size={35} round={true} />
            </LinkedinShareButton>
          </span>
        </div>
      </div>
    </StyledWorkoutHistoryCard>
  );
}

export default WorkoutHistoryCard;
