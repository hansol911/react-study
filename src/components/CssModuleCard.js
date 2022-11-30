import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import classes from "./CssModuleCard.module.css";

console.log(classes);

const CssModuleCard = () => (
  <div className={classes.box}>
    <figure>
      <img
        src="https://googlefonts.github.io/korean/public/assets/og-img.png"
        alt="Google Fonts + 한국어"
      />
    </figure>
    <div className={classes.title}>
      <h3>Google Fonts + 한국어</h3>
      <span className={classes.chip}>OSS</span>
    </div>
    <p className={classes.summary}>
      좋은 타이포그래피를 통해 웹은 더욱 아름답고, 빠르며, 누구나 참여할 수 있는 공간이 될 수
      있습니다. Google Fonts는 이 사이트에 수록된 오픈 소스 한글 폰트를 머신 러닝에 기반을 둔 최적화
      기술을 통해 시범적으로 제공합니다.
    </p>
    <div className={classes.footer}>
      <a
        className={`${classes.button} ${classes.primary} ${classes["btn-details"]}`}
        href="https://googlefonts.github.io/korean/"
        target="_blank"
        rel="noreferrer"
      >
        자세히 보기
      </a>
      <button
        type="button"
        className={`${classes.button} ${classes.default} ${classes["btn-favorite"]}`}
      >
        <AiOutlineHeart />
      </button>
    </div>
  </div>
);

export default CssModuleCard;
