/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NavigationMinusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NavigationMinusIcon(props: NavigationMinusIconProps) {
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
          "M17.5 15c-1.232-2.67-3.065-6.67-5.5-12L4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116L12 18.5m4 .5h6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default NavigationMinusIcon;
/* prettier-ignore-end */
