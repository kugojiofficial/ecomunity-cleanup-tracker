/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlagDiscountIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlagDiscountIcon(props: FlagDiscountIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.804 14.641c-.29-.186-.559-.4-.804-.641a5 5 0 00-7 0V5a5 5 0 017 0 5 5 0 007 0v8M5 21v-7m11 7l5-5m0 5v.01M16 16v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FlagDiscountIcon;
/* prettier-ignore-end */
