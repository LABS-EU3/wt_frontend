import React, { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/core";
import styled from "styled-components";

import { generateRandomItem } from "../../utils";
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
  },
  {
    id: "11",
    quote:
      "Things may come to those who wait, but only the things left by those who hustle."
  },
  {
    id: "12",
    quote: "Well done is better than well said."
  },
  {
    id: "13",
    quote: "Well done is better than well said."
  },
  {
    id: "14",
    quote: "All our dreams can come true if we have the courage to pursue them."
  },
  {
    id: "15",
    quote: "A champion is someone who gets up when they can’t."
  },
  {
    id: "16",
    quote: "What hurts today makes you stronger tomorrow."
  },
  {
    id: "17",
    quote:
      "If something stands between you and your success, move it. Never be denied."
  },
  {
    id: "18",
    quote:
      "If you want something you’ve never had, you must be willing to do something you’ve never done."
  },
  {
    id: "19",
    quote:
      "Success is walking from failure to failure with no loss of enthusiasm."
  },
  {
    id: "20",
    quote:
      "You have to think it before you can do it. The mind is what makes it all possible."
  }
];
let randomQuote = generateRandomItem(quotesData);

const StyledQuotes = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  p {
    background: #fffcf2;
    padding: 1.5rem;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    font-weight: bolder;
  }
`;

const Quotes = () => {
  const [quote, setQuote] = useState(randomQuote);

  useEffect(() => {
    const interval = setInterval(() => {
      randomQuote = quotesData[Math.floor(Math.random() * quotesData.length)];
      setQuote(randomQuote);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledQuotes>
      <Heading fontFamily="initial" textAlign="left" className="alignText">
        “
      </Heading>
      <p>{quote.quote}</p>

      <Heading fontFamily="initial" textAlign="right" width="100%">
        ”
      </Heading>
    </StyledQuotes>
  );
};

export default Quotes;
