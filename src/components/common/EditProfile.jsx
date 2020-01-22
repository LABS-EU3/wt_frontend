import React from "react";
import {
  Box,
  Input,
  Text,
  Select,
  Flex,
  Button,
  ModalFooter,
  Avatar,
  Stack
} from "@chakra-ui/core";
import logoImage from "../../images/login_image.png";

const EditProfile = () => {
  return (
    <Box>
      <Stack>
        <Avatar
          src={logoImage}
          size="2xl"
          marginLeft="35%"
          marginBottom="20px"
        />
        <Button variant="outline" variantColor="orange">
          Edit Profile Picture
        </Button>
      </Stack>
      <Box paddingTop="30px">
        <Text>Name</Text>
        <Input variant="flushed" type="text" />
      </Box>
      <Box>
        <Text paddingTop="15px">Email</Text>
        <Input variant="flushed" type="text" />
      </Box>
      <Flex paddingTop="15px" alignItems="center">
        <Box>
          <Text>Height</Text>
          <Input variant="flushed" type="number" />
        </Box>
        <Box>
          <Select marginLeft="30px" marginTop="30px">
            <option value="kilogram">Kilogram kg</option>
            <option value="pounds">Pounds lb</option>
          </Select>
        </Box>
      </Flex>
      <Flex paddingTop="15px" alignItems="center">
        <Box>
          <Text>Weight</Text>
          <Input variant="flushed" type="number" />
        </Box>
        <Box>
          <Select marginLeft="30px" marginTop="30px">
            <option value="kilogram">feet ""</option>
            <option value="pounds">Metres m</option>
          </Select>
        </Box>
      </Flex>
      <Box paddingTop="15px">
        <Text>Goal</Text>
        <Input variant="flushed" type="text" />
      </Box>
      <ModalFooter>
        <Button variantColor="orange" mr={3}>
          Save
        </Button>
        <Button variant="ghost" variantColor="orange">
          Cancel
        </Button>
      </ModalFooter>
    </Box>
  );
};

export default EditProfile;
