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

function EditPicture({
  client,
  history,
  onPictureClose,
  data,
  setUserData,
  uploadFile,
  setUploadFile,
  formik
}) {
  const toast = useToast();
  const [workouts, setWorkouts] = useState([]);
  const [uploadId, setUploadId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(formik.values, formik);

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

  return (
    <Box>
      <Stack>
        <Input
          id="photo"
          name="photo"
          placeholder="PHOTO"
          type="file"
          name="Uplad"
          onChange={onChange}
        />
      </Stack>
    </Box>
  );
}

export default withApollo(EditPicture);
