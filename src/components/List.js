import React from "react";
import PropTypes from "prop-types";

const List = ({ ordered = false, fontSize, children }) => {
  const Wrapper = ordered ? "ol" : "ul";
  return <Wrapper style={{ fontSize }}>{children}</Wrapper>;
};

List.propTypes = {
  ordered: PropTypes.bool,
  fontSize: PropTypes.string,
  children: PropTypes.node,
};

export default List;
