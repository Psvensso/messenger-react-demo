import React, { useContext } from "react";
import { Select } from "@chakra-ui/core";
import { AppSettingsContext } from "../util/contexts/settingsContext";

export const FriendSelector = () => {
  const { currentFriend, setCurrentFriend } = useContext(AppSettingsContext);
  /**
   * Get channel list from api and/or find channels in the messages array
   */
  return (
    <Select
      onChange={(e) => {
        setCurrentFriend(e.target.value || "global");
      }}
      value={currentFriend}
      placeholder="Select friend for private chat"
    >
      <option value="Anna">Anna</option>
      <option value="John">John</option>
      <option value="Malek">Malek</option>
      <option value="Py">Py</option>
    </Select>
  );
};
