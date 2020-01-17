import React from "react";

const quotesData = [
  {
    id: "1",
    quote:
      "The clock is ticking. Are you becoming the person you want to to be?"
  },
  {
    id: "2",
    quote:
      "The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion"
  },
  {
    id: "3",
    quote:
      "Success usually comes to those who are too busy to be looking for it."
  },
  {
    id: "4",
    quote:
      "If you think lifting is dangerous, try being weak. Being weak is dangerous."
  },
  {
    id: "5",
    quote:
      "The only place where success comes before work is in the dictionary."
  },
  {
    id: "6",
    quote: "The clock is ticking. Are you becoming the person you want to be?"
  },
  {
    id: "7",
    quote: "Whether you think you can, or you think you can’t, you’re right."
  },
  {
    id: "8",
    quote: "The successful warrior is the average man, with laser-like focus."
  },
  {
    id: "9",
    quote: "You must expect great things of yourself before you can do them."
  },
  {
    id: "10",
    quote: "Action is the foundational key to all success."
  }
];
const randomQuote = quotesData[Math.floor(Math.random() * quotesData.length)];

const Quotes = () => {
  return <p>{randomQuote.quote}</p>;
};

export default Quotes;
