import React from "react";
import { ThemeProvider } from "styled-components";
import StyledCard from "./components/StyledCard";

const blueTheme = {
  colors: {
    primary: "#228be6",
  },
};

const orangeTheme = {
  colors: {
    primary: "#ef891c",
  },
};

const App = () => (
  <div>
    <ThemeProvider theme={blueTheme}>
      <StyledCard />
    </ThemeProvider>
    <ThemeProvider theme={orangeTheme}>
      <StyledCard />
    </ThemeProvider>
  </div>
);

export default App;
