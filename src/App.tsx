import React, { useState } from "react";
import { FriendSelector } from "./components/friendSelector";
import { ChatWindow } from "./components/ChatWindow/chatWindow";
import { RegisterUserForm } from "./components/registerUserForm";
import { AppSettingsContext } from "./util/contexts/settingsContext";
import styled from "@emotion/styled";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 850px;
  margin: 45px auto 0 auto;
  height: 100%;
`;

function App() {
  const [currentUser, setCurrentUser] = useState<string>("");
  const [currentFriend, setCurrentFriend] = useState<string>("global");

  if (!currentUser) {
    return (
      <RegisterUserForm
        onChange={(userName) => {
          setCurrentUser(userName);
        }}
      />
    );
  }

  return (
    <AppSettingsContext.Provider
      value={{
        currentFriend,
        setCurrentFriend,
        currentUser,
      }}
    >
      <AppWrapper>
        <FriendSelector />
        <ChatWindow />
      </AppWrapper>
    </AppSettingsContext.Provider>
  );
}

export default App;
