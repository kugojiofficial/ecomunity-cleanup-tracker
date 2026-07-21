/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AccessibleOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AccessibleOffIcon(props: AccessibleOffIconProps) {
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
          "M10 16.5l2-3m0 0l2 3m-2-3V12m2.627-1.376L15 10.5m-6 0l2.231.744m8.811 4.801A9 9 0 007.955 3.958M5.637 5.635a9 9 0 1012.725 12.73M12 8a.5.5 0 10-.5-.5M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AccessibleOffIcon;
/* prettier-ignore-end */
