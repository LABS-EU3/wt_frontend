import React from "react";
import { withApollo } from "react-apollo";
import { Box, Input, Stack } from "@chakra-ui/core";

const EditPicture = ({ setUploadFile, formik }) => {
  const onChange = e => {
    const file = e.target.files[0];
    setUploadFile(file);
  };

  return (
    <Box>
      <Stack>
        <Input
          id="photo"
          placeholder="PHOTO"
          type="file"
          name="Upload"
          onChange={onChange}
        />
      </Stack>
    </Box>
  );
};

export default withApollo(EditPicture);
