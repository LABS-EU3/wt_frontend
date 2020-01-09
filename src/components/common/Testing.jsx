import React from "react";
import banner from "../../assets/banner.jpg";
import styled from "styled-components";
import PropTypes from "prop-types";
import { SAVE } from "../../graphql/mutations";
import { withApollo } from "react-apollo";
const Testing = ({ client }) => {
  const onChange = e => {
    const [file] = e.target.files;
    client
      .mutation({
        variables: {
          file
        }
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return <input type="file" name="Uplad" onChange={onChange} />;
};

export default withApollo(Testing);
