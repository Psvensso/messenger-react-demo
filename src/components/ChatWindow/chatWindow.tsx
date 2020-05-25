import React, { useContext } from "react";
import { AppSettingsContext } from "../../util/contexts/settingsContext";
import { useTypedSelector } from "../../util/hooks/useTypedState";
import { CreateMessageForm } from "./fragments/createMessageForm";
import { MessageList, ChatWindowWrapper, MessageRow } from "./chatWindow.style";

export const ChatWindow = () => {
  const { currentFriend, currentUser } = useContext(AppSettingsContext);
  const messages = useTypedSelector((s) => {
    return s.messages[currentFriend] || [];
  });
  return (
    <ChatWindowWrapper>
      <MessageList>
        {messages.map(({ author, body, postedAt }, i) => {
          console.log(author, currentFriend, currentUser);

          return (
            <MessageRow key={i}>
              <div className="postedAt">
                {"["}
                {postedAt.toLocaleString("en-US")}
                {"]"}
              </div>
              <div
                className={
                  "author poster-" + (author === currentUser ? "you" : "friend")
                }
              >
                {"<"}
                {author.toLocaleUpperCase()}
                {">"}
              </div>
              <div className="body">{body}</div>
            </MessageRow>
          );
        })}
      </MessageList>
      <CreateMessageForm />
    </ChatWindowWrapper>
  );
};
