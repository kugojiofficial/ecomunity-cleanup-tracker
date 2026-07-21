/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NavigationIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NavigationIcon(props: NavigationIconProps) {
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
          "M12 18.5l7.265 2.463c.196.077.42.032.57-.116a.548.548 0 00.134-.572L12 3 4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116L12 18.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default NavigationIcon;
/* prettier-ignore-end */
