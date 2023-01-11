import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const PaletteDisplay = () => {
  const { variant } = useParams();
  const theme = useTheme();

  return (
    <Stack direction="row">
      <Box
        p={2}
        bgcolor={`${variant}.light`}
        color={theme.palette.getContrastText(theme.palette[variant].light)}
      >
        {variant} Light
      </Box>
      <Box
        p={2}
        bgcolor={`${variant}.main`}
        color={theme.palette.getContrastText(theme.palette[variant].main)}
      >
        {variant} Main
      </Box>
      <Box
        p={2}
        bgcolor={`${variant}.dark`}
        color={theme.palette.getContrastText(theme.palette[variant].dark)}
      >
        {variant} Dark
      </Box>
    </Stack>
  );
};

export default PaletteDisplay;
