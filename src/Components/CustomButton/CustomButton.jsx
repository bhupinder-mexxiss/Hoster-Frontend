import React from "react";
// import "./CustomButton.css"; // Assuming you want to style it
import { Link, NavLink } from "react-router-dom";

const sizes = {
  sm: "text-sm font-normal",
  md: "text-sm sm:text-base font-normal",
  lg: "text-lg font-medium",
};
const variants = {
  pinkGradient: "bg-pink-gradient",
  'pinkPurple-70': "bg-pinkPurple-gradient-70",
  'pinkPurple-100': "bg-pinkPurple-gradient-100",
  blueGradient: "bg-blue-gradient",
  none: "bg-none"
};
const heights = {
  40: "md:h-10 h-8",
  50: "md:h-[50px] h-10",
  60: "lg:h-[60px] md:h-[50px] h-12",
}

const CustomButton = ({
  label, // Button text or label
  height = "40px",
  onClick, // Function to execute when button is clicked
  rounded = "50px",
  type = "button", // HTML button type (e.g., submit, button, reset)
  variant = "pinkGradient", // Button style (primary, secondary, etc.)
  size = "md", // Size of the button (small, medium, large)
  color = "text-white",
  disabled = false, // Disabled state
  className = "", // Additional custom class
  to,
  as,
  ...props // Other props (like aria-label, etc.)
}) => {
  const Component = as || "button";
  const sizeClass = sizes[size] || sizes.md;
  const bgVariant = variants[variant] || variants.pinkGradient
  const btnHeight = heights[height] || heights[40]
  return (
    <Component
      to={Component === Link || Component === NavLink ? to : undefined}
      type={Component === "button" ? type : undefined}
      className={`custom-btn text-center flex items-center justify-center ${btnHeight} ${bgVariant} ${color} ${sizeClass} ${className}`} // Dynamic class names
      onClick={onClick}
      disabled={disabled}
      {...props}
      style={{
        borderRadius: rounded, // Apply dynamic border-radius
      }}
    >
      {label}
    </Component>
  );
};

export default CustomButton;
