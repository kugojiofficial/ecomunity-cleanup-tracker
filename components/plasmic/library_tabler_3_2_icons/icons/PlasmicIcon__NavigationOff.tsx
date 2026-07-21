/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NavigationOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NavigationOffIcon(props: NavigationOffIconProps) {
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
          "M16.28 12.28C15.33 10.216 13.903 7.123 12 3c-.7 1.515-1.223 2.652-1.573 3.41m-1.27 2.75c-.882 1.913-2.59 5.618-5.127 11.115-.07.2-.017.424.135.572.15.148.374.193.57.116L12 18.5l7.265 2.463c.196.077.42.032.57-.116a.548.548 0 00.134-.572l-.26-.563M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default NavigationOffIcon;
/* prettier-ignore-end */
