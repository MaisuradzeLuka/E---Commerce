import btnStyles from "./Button.module.css";

const Button = ({ children, onClick, type, className }) => {
  return (
    <button
      type={type || "button"}
      className={`${btnStyles.btn} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
