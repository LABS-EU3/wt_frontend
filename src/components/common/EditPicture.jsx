import React, { useState, useEffect } from "react";
import { withApollo } from "react-apollo";
import {
  Box,
  Input,
  Select,
  Flex,
  Button,
  ModalFooter,
  Avatar,
  Stack,
  Heading,
  FormLabel,
  Switch,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure
} from "@chakra-ui/core";
import { useFormik } from "formik";

import {
  ModalContentArea,
  ModalFooter as StyledModalFooter
} from "../workouts/WorkoutHistoryStyle";

function EditPicture({ client, history, onPictureClose, data }) {
  const toast = useToast();
  const [workouts, setWorkouts] = useState([]);
  const [uploadId, setUploadId] = useState("");
  const [uploadFile, setUploadFile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const alert = (title, description, status) => {
    toast({
      title,
      description,
      status,
      duration: 9000,
      isClosable: true
    });
  };

  const onChange = e => {
    const file = e.target.files[0];
    setUploadFile(file);
  };

  const onOpenUpload = (id, e) => {
    setUploadId(id);
    onOpen(e);
  };

  const onUpload = e => {
    // e.preventDefault();
    // client
    //   .mutate({
    //     variables: {
    //       sessionId: uploadId,
    //       file: uploadFile
    //     },
    //     mutation: UPLOAD_PROGRESS_PICTURE
    //   })
    //   .then(res => {
    //     console.log(res);
    //     const { id, picture } = res.data.updateCompletedWorkout;
    //     setWorkouts(
    //       workouts.map(workout => {
    //         if (workout.id === id) return { ...workout, picture };
    //         return workout;
    //       })
    //     );
    //     alert("Progress picture uploaded successfully", "🚀", "success");
    //   })
    //   .catch(err =>
    //     alert(
    //       "An error occurred.",
    //       "Unable to upload your progress picture ☹️.",
    //       "error"
    //     )
    //   );
  };

  const formik = useFormik({
    // onSubmit: value => {
    //   setLoading(true);
    //   client
    //     .mutate({
    //       mutation: UPDATE_USER_DETAILS,
    //       variables: {
    //         firstname: value.firstname,
    //         lastname: value.lastname,
    //         experience: value.experience,
    //         equipment: value.equipment,
    //         height: value.height,
    //         weight: value.weight,
    //         heightUnit: value.heightUnit,
    //         weightUnit: value.weightUnit,
    //         goal: value.goal,
    //         reminderType: value.reminderType,
    //         photo: value.photo
    //       }
    //     })
    //     .then(res => {
    //       setLoading(false);
    //       setUpdatedData(res.data.updateUser);
    //       alert("Profile Updates Successfully", "", "success");
    //       onClose();
    //       setTimeout(() => {
    //         window.location.reload();
    //       }, 500);
    //     })
    //     .catch(error => {
    //       setLoading(false);
    //       if (error.graphQLErrors && error.graphQLErrors.length > 0) {
    //         alert(
    //           "An error occurred.",
    //           error.graphQLErrors[0].message,
    //           "error"
    //         );
    //       } else {
    //         alert("Unable to update profile", "", "error");
    //       }
    //     });
    // }
  });

  return (
    <Box>
      <Stack>
        <Avatar
          src={data.photo}
          size="2xl"
          marginLeft="35%"
          marginBottom="20px"
        />
        <input type="file" name="Uplad" onChange={onChange} />
      </Stack>
      <form onSubmit={formik.handleSubmit}>
        <ModalFooter>
          <Button type="submit" variantColor="orange" mr={3}>
            Save
          </Button>
          <Button variant="ghost" variantColor="orange" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </Box>
  );
}

export default withApollo(EditPicture);
