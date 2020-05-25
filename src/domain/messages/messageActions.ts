import { MapLike } from "../../util/globalTypes";
import { Message } from "./messageReducer";

export interface ICreateMessage {
  type: "MESSAGE_ACTION_CREATE";
  payload: {
    roomKey: string;
    message: Message;
  };
}

export type MessageActions = ICreateMessage;
