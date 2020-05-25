import React, { useCallback, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { ICreateMessage } from "../../../domain/messages/messageActions";
import { AppSettingsContext } from "../../../util/contexts/settingsContext";
import { Button, Input } from "@chakra-ui/core";
import styled from "@emotion/styled";

const SendForm = styled.form`
  width: 100%;
  display: flex;
  input {
    border-radius: 0;
    flex: 1;
  }
`;

type TProps = {};

export const CreateMessageForm = (p: TProps) => {
  const dispatch = useDispatch();
  const { currentFriend, currentUser } = useContext(AppSettingsContext);
  const [message, setMessage] = useState<string>("");

  const onPostMessage = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (!currentUser || !message) {
        return message;
      }

      dispatch<ICreateMessage>({
        type: "MESSAGE_ACTION_CREATE",
        payload: {
          message: {
            author: currentUser,
            body: message,
            postedAt: new Date(),
          },
          roomKey: currentFriend,
        },
      });

      setMessage("");
    },
    [dispatch, message, currentFriend, currentUser]
  );

  return (
    <SendForm onSubmit={onPostMessage}>
      <Input
        onChange={(e: any) => {
          setMessage(e.target.value);
        }}
        autoFocus={true}
        value={message}
        type="text"
        placeholder="Message"
      ></Input>
      <Button type="submit">Send</Button>
    </SendForm>
  );
};
