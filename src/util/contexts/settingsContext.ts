import { createContext } from "react";

type TContext = {
  currentFriend: string;
  setCurrentFriend: (friendName: string) => void;
  currentUser: string | null;
};

export const AppSettingsContext = createContext<TContext>({
  currentUser: null,
  currentFriend: "global",
  setCurrentFriend: () => {},
});
