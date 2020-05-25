import styled from "@emotion/styled";

export const ChatWindowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MessageList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 50vh;
  min-height: 450px;
  padding: 5px;
  overflow-y: auto;
`;

export const MessageRow = styled.div`
  width: 100%;
  display: flex;
  border-radius: 3px;

  .body {
    color: white;
  }

  .postedAt {
    color: gray;
  }

  .author {
    color: white;
    color: #0d6aff;

    &.poster-you {
      color: red;
    }
  }
`;
