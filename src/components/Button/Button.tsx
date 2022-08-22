import React from "react";
import { classNames } from "../../utils";

export interface ButtonProps {
  /**
   * Classes to be applied to the button
   */
  className?: string;

  /**
   * Is button disabled?
   * @Default false
   */
  disabled?: boolean;

  /**
   * Text of the button
   */
  text?: string;

  /**
   * Either a button text or a react component.
   */
  children?: React.ReactNode;

  /**
   * Style to be applied to the button.
   */
  style?: React.CSSProperties;

  /**
   * Button varient.
   * @Default 'primary'
   */
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "alert"
    | "pause"
    | "save"
    | "white-filled"
    | "facebook";

  /**
   * Function to be called when hit a button
   */
  onClick: (e?: React.MouseEvent<HTMLElement>) => void;

  /**
   * Type of the button.
   */
  type?: "button" | "submit" | "reset";

  /**
   * Id of the div item.
   */
  id?: string;

  /**
   * To check which button is clicked with same onClick function.
   */
  dataId?: string;

  /**
   * ID used to identify the button during testing.
   */
  dataTestId?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={classNames(
        " border-none box-border rounded-full transition-colors ease-linear duration-100 text-white text-sm font-normal py-2 px-6 hover:cursor-pointer disabled:cursor-not-allowed disabled:pointer-events-none",
        props.variant === "primary"
          ? " bg-teal-400 border-[1px] border-teal-400  hover:bg-teal-500 hover:border-teal-500 disabled:bg-gray-400 disabled:border-gray-400"
          : props.variant === "secondary"
          ? " bg-transparent text-white border-2 border-[rgba(255,255,255,0.5)] hover:bg-gray-500"
          : props.variant === "tertiary"
          ? " bg-transparent border-[1px] border-transparent"
          : props.variant === "alert"
          ? " bg-red-400 border-[1px] border-red-400 hover:bg-red-300"
          : props.variant === "pause"
          ? " bg-[#bf4d64] border-[1px] border-[#b03e55] max-w-full"
          : props.variant === "save"
          ? " bg-[#d7972e] max-w-full hover:bg-[#c8881f]"
          : props.variant === "white-filled"
          ? "bg-white text-black bg:[#f5f5f5] border-[1px] border-gray-300 hover:bg-transparent"
          : props.variant === "facebook"
          ? "text-white bg-[#4267b2] hover:bg-[#35569a]"
          : "",
        props.className
      )}
      id={props.id}
      style={props.style}
      type={props.type || "button"}
      data-id={props.dataId}
      data-test-id={props.dataTestId}
      disabled={props.disabled}
      onClick={props.disabled ? null : props.onClick}
    >
      {props.text || props.children}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
};

export default React.memo(Button);
