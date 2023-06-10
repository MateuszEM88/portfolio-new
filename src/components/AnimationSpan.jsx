import React from "react";

const AnimationSpan = (props) => {
  return (
    <span
      id="name-animation"
      onMouseEnter={(e) => e.currentTarget.classList.add("bounce")}
      onAnimationEnd={(e) => e.currentTarget.classList.remove("bounce")}
    >
      {props.text}
    </span>
  );
};

export default AnimationSpan;
