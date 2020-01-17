import React from "react";

const quotesData = [
  {
    id: "1",
    quote:
      "The clock is ticking. Are you becoming the person you want to to be?"
  },
  {
    id: "2",
    quote: "Workout or stay out"
  },
  {
    id: "3",
    quote: "Nice or stay out"
  }
];
const randomQuote = quotesData[Math.floor(Math.random() * quotesData.length)];

const Quotes = () => {
  return <p>{randomQuote.quote}</p>;
};

export default Quotes;
