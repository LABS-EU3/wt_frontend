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

import {
  ModalContentArea,
  ModalFooter as StyledModalFooter
} from "../workouts/WorkoutHistoryStyle";
import { UPDATE_USER_DETAILS } from "../../graphql/mutations";

function EditPicture({ client, history, onPictureClose, data, setUserData }) {
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
    e.preventDefault();
    client
      .mutate({
        variables: {
          photo: uploadFile
        },
        mutation: UPDATE_USER_DETAILS
      })
      .then(res => {
        const updatedUser = res.data.updateUser;
        setUserData(updatedUser.photo);
        alert("Profile picture uploaded successfully", "🚀", "success");
      })
      .catch(err =>
        alert(
          "An error occurred.",
          "Unable to upload your profile picture ☹️.",
          "error"
        )
      );
  };

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
      <ModalFooter>
        <Button type="submit" variantColor="orange" mr={3} onClick={onUpload}>
          Save
        </Button>
        <Button variant="ghost" variantColor="orange" onClick={onClose}>
          Cancel
        </Button>
      </ModalFooter>
    </Box>
  );
}

export default withApollo(EditPicture);
