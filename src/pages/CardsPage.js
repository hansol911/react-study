import { Button, capitalize, Stack } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const CardsPage = () => {
  return (
    <div>
      <Stack direction="row" gap={2} m={2}>
        <Button LinkComponent={Link} to="inline-style-card" variant="soft">
          {capitalize("Inline Style Card")}
        </Button>
        <Button LinkComponent={Link} to="css-module-card" variant="soft">
          {capitalize("CSS Module Card")}
        </Button>
        <Button LinkComponent={Link} to="styled-component-card" variant="soft">
          {capitalize("Styled Component Card")}
        </Button>
        <Button LinkComponent={Link} to="material-card" variant="soft">
          {capitalize("Material Card")}
        </Button>
      </Stack>
      <Outlet />
    </div>
  );
};

export default CardsPage;
