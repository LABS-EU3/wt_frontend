import React, { useEffect } from "react";
import Chart from "./Chart";

import StyledCharts from "./StyledChart";

const Charts = ({ graphs }) => {
  let slideIndex = 1;

  useEffect(() => {
    showSlides(slideIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function changeSlides(n) {
    showSlides((slideIndex += n));
  }

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }

  return (
    <StyledCharts>
      {graphs.map(graphData => (
        <Chart
          key={graphData.name}
          graphData={graphData}
          changeSlides={changeSlides}
        />
      ))}
      <p>Data view</p>
    </StyledCharts>
  );
};

export default Charts;
