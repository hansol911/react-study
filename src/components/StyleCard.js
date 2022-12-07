import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import styles from "./StyleCard.styles.js";

const StyleCard = () => (
  <div className="card" style={styles.box}>
    <figure style={styles.figure}>
      <img
        src="https://googlefonts.github.io/korean/public/assets/og-img.png"
        alt="Google Fonts + 한국어"
        style={styles.img}
      />
    </figure>
    <div className="title" style={styles.title}>
      <h3 style={styles.titleText}>Google Fonts + 한국어</h3>
      <span className="chip" style={styles.titleCategory}>
        OSS
      </span>
    </div>
    <p className="summary" style={styles.summary}>
      좋은 타이포그래피를 통해 웹은 더욱 아름답고, 빠르며, 누구나 참여할 수 있는 공간이 될 수
      있습니다. Google Fonts는 이 사이트에 수록된 오픈 소스 한글 폰트를 머신 러닝에 기반을 둔 최적화
      기술을 통해 시범적으로 제공합니다.
    </p>
    <div className="footer" style={styles.footer}>
      <a
        href="https://googlefonts.github.io/korean/"
        className="button primary btn-details"
        target="_blank"
        style={styles.btnDetails}
        rel="noreferrer"
      >
        자세히 보기
      </a>
      <button
        type="button"
        className="button default btn-favorite"
        style={styles.btnFavorite}
        title="좋아요"
      >
        <AiOutlineHeart />
      </button>
    </div>
  </div>
);

export default StyleCard;
