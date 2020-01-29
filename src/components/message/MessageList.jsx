import React from "react";
import { StyledMessagesList } from "./Styledmessages";

const MessageList = () => {
  return (
    <StyledMessagesList>
      <div className="users-list"></div>

      <div className="messages"></div>

      <div className="user-detail"></div>
    </StyledMessagesList>
  );
};

export default MessageList;
