import { Chip, chipClasses } from "@mui/material";
import React from "react";
import { ThemeProvider } from "styled-components";
import MuiBoxList from "./components/MuiBoxList";
import StyledCard from "./components/StyledCard";

const blueTheme = {
  colors: {
    primary: "#228be6",
  },
};

const App = () => (
  <div>
    <Chip
      label="hansol"
      variant="outlined"
      color="success"
      onDelete={() => {}}
      sx={{
        [`& .${chipClasses.label}`]: {
          fontWeight: "bold",
        },
        [`& .${chipClasses.deleteIcon}`]: {
          color: "error.main",
          ":hover, : active": {
            color: "error.dark",
          },
        },
      }}
    />
    <MuiBoxList />
    <ThemeProvider theme={blueTheme}>
      <StyledCard
        image={
          <img
            src="https://googlefonts.github.io/korean/public/assets/og-img.png"
            alt="Google Fonts + 한국어"
          />
        }
        title="Google Fonts + 한국어"
        category="OSS"
        summary="좋은 타이포그래피를 통해 웹은 더욱 아름답고, 빠르며, 누구나 참여할 수 있는 공간이 될 수
        있습니다. Google Fonts는 이 사이트에 수록된 오픈 소스 한글 폰트를 머신 러닝에 기반을 둔
        최적화 기술을 통해 시범적으로 제공합니다."
        link="https://googlefonts.github.io/korean/"
      />
    </ThemeProvider>
  </div>
);

export default App;
