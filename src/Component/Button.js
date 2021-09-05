import React from "react";

const Button = ({ onClickEvent, disabled }) => {
  return (
    <button className="btn" type="submit" disabled={disabled} onClick={onClickEvent}>
      Get City
    </button>
  );
};

export default Button;
