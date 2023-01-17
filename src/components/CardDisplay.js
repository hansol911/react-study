import React from "react";
import { useParams } from "react-router-dom";
import StyleCard from "./StyleCard";
import CssModuleCard from "./CssModuleCard";
import StyledCard from "./StyledCard";
import MaterialCard from "./MaterialCard";

const CardDisplay = () => {
  const { variant } = useParams();

  function randerComponent(param) {
    switch (param) {
      case "inline-style-card":
        return <StyleCard />;
      case "css-module-card":
        return <CssModuleCard />;
      case "styled-component-card":
        return (
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
        );
      case "material-card":
        return <MaterialCard />;
    }
  }
  return <div>{randerComponent(variant)}</div>;
};

export default CardDisplay;
