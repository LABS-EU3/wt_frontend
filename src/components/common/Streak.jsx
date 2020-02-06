import React from "react";
import styled from "styled-components";

const StyledStreak = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  bottom: 0;
  position: absolute;
`;

const Streak = ({ streak, position = "absolute" }) => {
  let message = "Fantastic, Great work!";
  let emoji = "🚀🚀🚀";
  let className = "high";

  if (streak < 5) {
    message = "You can do better!!";
    emoji = "😔😕🥺😢😭";
    className = "low";
  }

  if (streak > 5 && streak < 10) {
    message = "Keep it up!";
    emoji = "🔥🔥🔥";
    className = "moderate";
  }

  return (
    <StyledStreak className={className} style={{ position }}>
      <span role="img" aria-label="fire-emoji">
        {emoji}
      </span>{" "}
      You have {streak}(s) days streak. {message}
    </StyledStreak>
  );
};

export default Streak;
