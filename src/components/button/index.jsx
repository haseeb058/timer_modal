import style from "./button.module.scss";

const Button = ({
  className,
  title,
  onClick,
  type,
  isLoading,
  disabled,
  icon,
}) => {
  return (
    <>
      <button
        className={`${style.btn} ${className}`}
        onClick={(e) => {
          onClick && onClick(e);
        }}
        type={type}
        disabled={disabled || isLoading || false}
        style={{ pointerEvents: isLoading || disabled ? "none" : "auto" }}
      >
        {icon && <img src={icon} alt={"button icon"} />}
        {title}
      </button>
    </>
  );
};

export default Button;
