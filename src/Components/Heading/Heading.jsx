import React from "react";
const sizes = {
  xs: "text-[14px]",
  sm: "text-[16px]",
  lg: "text-[18px]",
  xl: "text-[20px]",
  xxl: "lg:text-[24px] sm:text-xl text-lg",
  "3xl": "lg:text-[32px] md:text-3xl sm:text-[26px] xs:text-[22px] text-xl",
  "4xl": "xl:text-[40px] lg:text-[36px] md:text-[34px] sm:text-[32px] xs:text-[28px] text-2xl leading-[32px] xs:leading-[36px] md:leading-[38px] lg:leading-[48px]",
  "5xl":
    "4xl:text-[60px] font-bold xl:text-[52px] sm:text-[42px] xs:text-4xl text-2xl leading-[36px] xs:leading-[46px] sm:leading-[52px] xl:leading-[68px]",
};
const Heading = ({
  children,
  className = "",
  size = "sm",
  fontWeight = "400",
  color = "text-white",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={` ${className} ${color}  ${sizes[size]}`}
      {...restProps}
      style={{
        fontWeight,
      }}
    >
      {children}
    </Component>
  );
};
export { Heading };
