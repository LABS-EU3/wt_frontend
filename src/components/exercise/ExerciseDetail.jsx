import React, { useState, useEffect } from "react";
import { withApollo } from "react-apollo";
import { useToast } from "@chakra-ui/core";
import ReactPlayer from "react-player";

import { ExerciseDetailStyle } from "./ExerciseStyle";
import { GET_EXERCISE } from "../../graphql/queries";
import CustomSpinner from "../common/Spinner";

const ExerciseCard = ({ client, match }) => {
  const toast = useToast();
  const [exercise, setExercise] = useState({});
  const [loading, setLoading] = useState(false);

  const alert = (title, description, status) => {
    toast({
      title,
      description,
      status,
      duration: 9000,
      isClosable: true
    });
  };

  useEffect(() => {
    const { id } = match.params;
    setLoading(true);
    client
      .query({
        query: GET_EXERCISE,
        variables: { id }
      })
      .then(res => {
        setExercise(res.data.exercise);
        setLoading(false);
      })
      .catch(() => {
        alert("An error occurred.", "Unable to load excercise detail", "error");
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <CustomSpinner thickness="6px" size="xl" text="Loading..." />;
  }

  if (exercise) {
    const {
      name,
      pictureTwo,
      description,
      muscle,
      difficulty,
      equipment,
      type,
      rating,
      video
    } = exercise;
    return (
      <ExerciseDetailStyle>
        <div className="exerciseCard-header">
          <h2>{name}</h2>
        </div>

        <div className="excercise-video">
          <ReactPlayer url={video} controls />
        </div>

        <div className="exerciseCard-information">
          <div className="exerciseCard-instruction">
            <h3>Instructions</h3>
            <p>{description}</p>
          </div>
          <div className="exerciseCard-data">
            <div className="exerciseCard-data-tab">
              <p>Difficulty</p>
              <p className="exerciseCard-data-value">{difficulty}</p>
            </div>
            <div className="exerciseCard-data-tab">
              <p>Types</p>
              <p className="exerciseCard-data-value">{type}</p>
            </div>
            <div className="exerciseCard-data-tab">
              <p>Equipment</p>
              <p className="exerciseCard-data-value">{equipment}</p>
            </div>
            <div className="exerciseCard-data-tab">
              <p>Muscles</p>
              <p className="exerciseCard-data-value">{muscle}</p>
            </div>
            <div className="exerciseCard-data-tab">
              <p>Ratings</p>
              <p className="exerciseCard-data-value">{rating}</p>
            </div>
          </div>
        </div>
      </ExerciseDetailStyle>
    );
  }

  return <CustomSpinner thickness="6px" size="xl" text="Loading..." />;
};

export default withApollo(ExerciseCard);
