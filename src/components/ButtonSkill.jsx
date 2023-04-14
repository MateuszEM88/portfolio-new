import React from "react";

const ButtonSkill = (props) => {
  return (
    <>
      <button className="m-1 px-4 border-2 rounded-full text-primaryText dark:text-darkText ">
        {props.text}
      </button>
    </>
  );
};

export default ButtonSkill;
