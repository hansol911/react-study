import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import styled, { css } from "styled-components";

const borderColor = " #dee2e6";
const maxWidth = "360px";
const defaultGap = "16px";

const Button = styled.button`
  display: inline-flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0px ${defaultGap};
  border: 1px solid transparent;
  border-radius: calc(${defaultGap} / 2);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;

  /* background-color: ${props =>
    (props.variant === "primary" && "#228be6") || (props.variant === "default" && "#ffffff")};
  color: ${props =>
    (props.variant === "primary" && "#ffffff") || (props.variant === "default" && "#000000")};
  border-color: ${props =>
    (props.variant === "primary" && "transparent") ||
    (props.variant === "default" && "#ced4da")}; */

  ${props =>
    props.variant === "primary" &&
    css`
      background-color: ${props.theme.colors.primary};
      color: #ffffff;
    `}

  ${props =>
    props.variant === "default" &&
    css`
      border-color: #ced4da;
      background-color: #ffffff;
      color: #000000;
    `}
`;
const CardBox = styled.div`
  max-width: ${maxWidth};
  border-radius: calc(${defaultGap} / 2);
  border: 1px solid ${borderColor};
  overflow: hidden;

  figure {
    margin: 0;

    img {
      display: block;
      width: 100%;
      height: 189px;
      object-fit: cover;
    }
  }

  .title {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: ${defaultGap};
    margin: ${defaultGap};

    h3 {
      flex: 1;
      margin: 0;
      font-size: 20px;
      font-family: "Jua";
    }

    .chip {
      padding: 0 10px;
      border-radius: 32px;
      font-size: 12px;
      font-weight: 700;
      line-height: 22px;
      background-color: #e7f5ff;
      color: #228be6;
    }
  }

  .summary {
    margin: ${defaultGap};
    line-height: 1.666;
    color: #000000cc;
  }

  .footer {
    display: flex;
    flex-flow: row;
    gap: ${defaultGap};
    align-items: stretch;
    justify-content: flex-end;
    padding: calc(${defaultGap} / 2) ${defaultGap} ${defaultGap} ${defaultGap};
    border-top: 1px solid ${borderColor};

    ${Button}.btn-details {
      flex: 1;
    }
    ${Button}.btn-favorite {
      flex: 0 0 auto;
      width: 36px;
      padding: 0px;
      color: #fa5252;
      font-size: 18px;
    }
  }
`;

const StyledCard = () => {
  return (
    <CardBox className="card">
      <figure>
        <img
          src="https://googlefonts.github.io/korean/public/assets/og-img.png"
          alt="Google Fonts + 한국어"
        />
      </figure>
      <div className="title">
        <h3>Google Fonts + 한국어</h3>
        <span className="chip">OSS</span>
      </div>
      <p className="summary">
        좋은 타이포그래피를 통해 웹은 더욱 아름답고, 빠르며, 누구나 참여할 수 있는 공간이 될 수
        있습니다. Google Fonts는 이 사이트에 수록된 오픈 소스 한글 폰트를 머신 러닝에 기반을 둔
        최적화 기술을 통해 시범적으로 제공합니다.
      </p>
      <div className="footer">
        <Button
          as="a"
          variant="primary"
          href="https://googlefonts.github.io/korean/"
          className="btn-details"
          target="_blank"
          rel="noreferrer"
        >
          자세히 보기
        </Button>
        <Button type="button" variant="defaul" className="btn-favorite" title="좋아요">
          <AiOutlineHeart />
        </Button>
      </div>
    </CardBox>
  );
};

export default StyledCard;
