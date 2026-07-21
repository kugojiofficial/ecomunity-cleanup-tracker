/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RadioactiveOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RadioactiveOffIcon(props: RadioactiveOffIconProps) {
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
          "M14.118 14.127c-.182.181-.39.341-.618.473l3 5.19a9.001 9.001 0 001.856-1.423m1.68-2.32A8.993 8.993 0 0021 12h-5m-2.5-2.6l3-5.19a9 9 0 00-8.536-.25M10.5 14.6l-3 5.19A9 9 0 013 12h6a3 3 0 001.5 2.6zM3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RadioactiveOffIcon;
/* prettier-ignore-end */
