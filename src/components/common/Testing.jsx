import React from "react";
import banner from "../../assets/banner.jpg";
import styled from "styled-components";
import PropTypes from "prop-types";
import { UPLOAD_PROGRESS_PICTURE } from "../../graphql/mutations";
import { withApollo } from "react-apollo";

const Testing = ({ client }) => {
  const onChange = e => {
    const file = e.target.files[0];
    console.log(file);
    client
      .mutate({
        variables: {
          file
        },
        mutation: UPLOAD_PROGRESS_PICTURE
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return <input type="file" name="Uplad" onChange={onChange} />;
};

export default withApollo(Testing);
