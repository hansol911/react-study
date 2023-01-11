import { Button, capitalize, Stack } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const ButtonsPage = () => {
  return (
    <div>
      <Stack direction="row" gap={2} m={2}>
        {["primary", "secondary", "error", "warning", "info", "success", "brand"].map(v => (
          <Button LinkComponent={Link} to={v} variant="soft" key={v} color={v}>
            {capitalize(v)}
          </Button>
        ))}
      </Stack>
      <Outlet />
    </div>
  );
};

export default ButtonsPage;
