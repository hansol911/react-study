import { FavoriteBorder } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const MaterialCard = () => {
  return (
    <Card sx={{ maxWidth: "360px" }}>
      <CardMedia
        component="img"
        height="180"
        image="https://googlefonts.github.io/korean/public/assets/og-img.png"
        alt="Google Fonts + 한국어"
      />
      <CardContent>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          marginBottom={2}
        >
          <Typography variant="h6" component="h3">
            Google Fonts + 한국어
          </Typography>
          <Chip label="OSS" size="small" variant="outlined" color="primary" />
        </Stack>
        <Typography variant="body1" paragraph marginBottom={0}>
          좋은 타이포그래피를 통해 웹은 더욱 아름답고, 빠르며, 누구나 참여할 수 있는 공간이 될 수
          있습니다. Google Fonts는 이 사이트에 수록된 오픈 소스 한글 폰트를 머신 러닝에 기반을 둔
          최적화 기술을 통해 시범적으로 제공합니다.
        </Typography>
      </CardContent>
      <Divider />
      <Stack direction="row" spacing={2} p={2}>
        <Button
          component="a"
          href="https://googlefonts.github.io/korean/"
          target="_blank"
          rel="noreferrer"
          variant="contained"
          color="primary"
          fullWidth
        >
          자세히 보기
        </Button>
        <IconButton variant="outlined" title="좋아요">
          <FavoriteBorder htmlColor="#fa5252" />
        </IconButton>
      </Stack>
    </Card>
  );
};

export default MaterialCard;
