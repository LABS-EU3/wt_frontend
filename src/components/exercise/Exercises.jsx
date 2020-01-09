import React, { useState, useEffect } from "react";
import { withApollo } from "react-apollo";
import { useToast } from "@chakra-ui/core";

import CustomSpinner from "../common/Spinner";
import { GET_EXCERCISES } from "../../graphql/queries";
import Excercise from "./Exercise";

const Excercises = ({ client }) => {
  const toast = useToast();

  const [loading, setLoading] = useState(false);
  const [exercises, setExercises] = useState([]);

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
    setLoading(true);
    client
      .query({
        query: GET_EXCERCISES
      })
      .then(res => {
        setExercises(res.data.exercises);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        alert(
          "An error occurred.",
          "Unable to load excercises. Please reload the page and try again",
          "error"
        );
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <CustomSpinner thickness="6px" size="xl" text="Loading..." />;
  }
  console.log(exercises);
  if (exercises.length > 0) {
    return exercises.map(excercise => (
      <Excercise excercise={excercise} key={excercise.id} />
    ));
  }

  return <CustomSpinner thickness="6px" size="xl" text="Loading..." />;
};

export default withApollo(Excercises);
