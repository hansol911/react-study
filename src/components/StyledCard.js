import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

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

const StyledCard = ({image, title, category, summary, link }) => {
  return (
    <CardBox className="card">
      <figure>
        {image}
      </figure>
      <div className="title">
        <h3>{title}</h3>
        <span className="chip">{category}</span>
      </div>
      <p className="summary">{summary}</p>
      <div className="footer">
        <Button
          as="a"
          variant="primary"
          href={link}
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

StyledCard.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  category: PropTypes.string,
  summary: PropTypes.string,
  link: PropTypes.string,
};

export default StyledCard;
