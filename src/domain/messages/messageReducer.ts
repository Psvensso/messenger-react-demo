import { MapLike } from "../../util/globalTypes";
import { MessageActions } from "./messageActions";

export type Message = {
  author: string;
  postedAt: Date;
  body: string;
};

type MessageState = MapLike<Message[]>;
const testMessages: Message[] = [
  {
    author: "malek",
    body: "amet ad laborum eu nulla amet exercitation irure",
    postedAt: new Date(),
  },
  {
    author: "per",
    body: "excepteur cillum officia in exercitation nisi amet eiusmod",
    postedAt: new Date(),
  },
  {
    author: "malek",
    body: "amet ad laborum eu nulla amet exercitation irure",
    postedAt: new Date(),
  },
  {
    author: "per",
    body: "aliquip ullamco laboris ea amet minim dolore reprehenderit",
    postedAt: new Date(),
  },
  {
    author: "per",
    body: "reprehenderit do anim aute veniam sit anim enim",
    postedAt: new Date(),
  },
  {
    author: "malek",
    body: "amet ad laborum eu nulla amet exercitation irure",
    postedAt: new Date(),
  },
  {
    author: "per",
    body: "sit non officia excepteur tempor esse veniam ullamco",
    postedAt: new Date(),
  },
];
const defaultState: MessageState = {
  Malek: testMessages,
};

export const messageReducer = (
  state: MessageState = defaultState,
  action: MessageActions
) => {
  switch (action.type) {
    case "MESSAGE_ACTION_CREATE": {
      const { message, roomKey } = action.payload;

      //Initialize the room
      state[roomKey] = Array.isArray(state[roomKey]) ? state[roomKey] : [];

      //Add message
      state[roomKey].push(message);
      //Replace array
      state[roomKey] = state[roomKey].slice(0);

      //Spread the state (since were not using immutable)
      return { ...state };
    }
  }

  return state;
};
