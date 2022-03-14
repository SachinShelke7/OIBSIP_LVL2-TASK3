import React from "react";

const Button = ({ children, type, name, ...rest }) => {
  return (
    <button type={type === "submit" ? "submit" : "button"} {...rest}>
      {name}
    </button>
  );
};

function SelectButton({ children, id, ...rest }) {
  return <select {...rest}>{children}</select>;
}

export { SelectButton };
export default Button;
