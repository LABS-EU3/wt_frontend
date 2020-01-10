import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function Timer({ time }) {
  //   const renderTime = value => {
  //     if (value === 0) {
  //       return <div className="timer">Too lale...</div>;
  //     }

  //     return (
  //       <div className="timer">
  //         <div className="text">Remaining</div>
  //         <div className="value">{value}</div>
  //         <div className="text">seconds</div>
  //       </div>
  //     );
  //   };

  return (
    <div>
      {/* <CountdownCircleTimer
        isPlaying={false}
        durationSeconds={time}
        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
        renderTime={renderTime}
        // onComplete={() => [true, 1000]}
      /> */}
      <p>{time}</p>
    </div>
  );
}

export default Timer;
