import { Box, css, Stack, useTheme, experimental_sx as sx, styled } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";

const MuiBoxList = () => {
  const theme = useTheme();
  return (
    <Stack spacing={2} m={2} direction="row">
      <Box
        sx={{
          p: 1,
          bgcolor: "primary.main",
          color: "primary.contrastText",
          borderRadius: 2,
          fontSize: "h4.fontSize",
          outline: {
            md: "4px solid #f00",
            sm: "4px solid #0f0",
          },
          outlineColor: {
            lg: "#000",
          },
          "&:hover": {
            bgcolor: "primary.light",
          },
          "& .text": {
            bgcolor: purple[100],
            color: purple[800],
            fontSize: "0.9rem",
            typography: "button",
          },
          [theme.breakpoints.between("sm", "lg")]: {
            bgcolor: "warning.main",
          },
          transition: theme.transitions.create(["background-color"], {
            duration: theme.transitions.duration.short,
          }),
        }}
      >
        Blue <span className="text">Purple</span>
      </Box>
      <Box
        sx={css`
          padding: ${theme.spacing(1)};
          background-color: ${theme.palette.primary.main};
          color: ${theme.palette.primary.contrastText};
          border-radius: ${theme.shape.borderRadius * 2}px;
          font-size: ${theme.typography.h4.fontSize};
          &:hover {
            background-color: ${theme.palette.primary.light};
          }
          & .text {
            background-color: ${purple[100]};
            color: ${purple[800]};
            font-size: 0.9rem;
            ${css({ ...theme.typography.button })}
          }
          ${theme.breakpoints.between("sm", "lg")} {
            background-color: ${theme.palette.warning.main};
          }
          transition: ${theme.transitions.create(["background-color"])};
        `}
      >
        Blue <span className="text">Purple</span>
      </Box>
      <StyledBox1>
        Blue <span className="text">Purple</span>
      </StyledBox1>
      <StyledBox2>
        Blue <span className="text">Purple</span>
      </StyledBox2>
      <StyledBox3>
        Blue <span className="text">Purple</span>
      </StyledBox3>
      <StyledBox4>
        Blue <span className="text">Purple</span>
      </StyledBox4>
    </Stack>
  );
};

const StyledBox1 = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: theme.shape.borderRadius * 2,
  fontSize: theme.typography.h4.fontSize,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  ".text": {
    backgroundColor: purple[100],
    color: purple[800],
    fontSize: "0.9rem",
  },
}));

// 축약형 속성명과 값을 사용할 수 있습니다.
const StyledBox2 = styled(Box)(
  sx({
    p: 1,
    bgcolor: "primary.main",
    color: "primary.contrastText",
    borderRadius: 2,
    fontSize: "h4.fontSize",
    "&:hover": {
      bgcolor: "primary.dark",
    },
    ".text": {
      bgcolor: purple[100],
      color: purple[800],
      fontSize: "0.9rem",
    },
  }),
);

// CSS 표현법으로는 모두 축약형 속성을 사용할 수 없습니다.
const StyledBox3 = styled(Box)`
  padding: ${({ theme }) => theme.spacing(1)}; // px 단위까지 계산되어 나옴
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  border-radius: ${({ theme }) => theme.shape.borderRadius * 2}px; // 단위까지 계산되어 나오지 않음
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
  & .text {
    background-color: ${purple[100]};
    color: ${purple[800]};
    font-size: 0.9rem;
  }
`;

const StyledBox4 = styled(Box)(
  ({ theme }) => css`
    padding: ${theme.spacing(1)};
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.primary.contrastText};
    border-radius: ${theme.shape.borderRadius * 2}px;
    font-size: ${theme.typography.h4.fontSize};
    &:hover {
      background-color: ${theme.palette.primary.light};
    }
    & .text {
      background-color: ${purple[100]};
      color: ${purple[800]};
      font-size: 0.9rem;
    }
  `,
);

export default MuiBoxList;
