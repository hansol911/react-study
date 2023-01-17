import { Box, css, Drawer, Link } from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const menuWidth = 240;

const HomePage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: menuWidth,
          "& .MuiDrawer-paper": {
            width: menuWidth,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box p={2}>
          <Link
            component={NavLink}
            to="/"
            sx={css`
              &.active {
                color: #787878;
                font-weight: bold;
              }
            `}
          >
            홈페이지
          </Link>
        </Box>
        <Box p={2}>
          <Link
            component={NavLink}
            to="/card"
            sx={css`
              &.active {
                color: #787878;
                font-weight: bold;
              }
            `}
          >
            Card
          </Link>
        </Box>
        <Box p={2}>
          <Link
            component={NavLink}
            to="/buttons"
            sx={css`
              &.active {
                color: #787878;
                font-weight: bold;
              }
            `}
          >
            Buttons
          </Link>
        </Box>
        <Box p={2}>
          <Link
            component={NavLink}
            to="/chip"
            sx={css`
              &.active {
                color: #787878;
                font-weight: bold;
              }
            `}
          >
            Chip
          </Link>
        </Box>
        <Box p={2}>
          <Link
            component={NavLink}
            to="/error"
            sx={css`
              &.active {
                color: #787878;
                font-weight: bold;
              }
            `}
          >
            Error
          </Link>
        </Box>
      </Drawer>
      <Box p={2}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default HomePage;
