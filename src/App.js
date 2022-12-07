import React from "react";
import styled from "styled-components";
import List from "./components/List";

const ListItem = styled.li`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #dddddd;
`;

const App = () => (
  <div>
    <List ordered fontSize="20px">
      <ListItem>아침</ListItem>
      <li>점심</li>
      <li>저녁</li>
    </List>
    <List fontSize="1.5rem">
      <li>사과</li>
      <li>멜론</li>
      <li>딸기</li>
    </List>
  </div>
);

export default App;
