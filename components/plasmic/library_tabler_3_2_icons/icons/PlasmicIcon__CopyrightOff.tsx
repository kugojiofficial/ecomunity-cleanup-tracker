/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CopyrightOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CopyrightOffIcon(props: CopyrightOffIconProps) {
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
          "M14 9.75a3.016 3.016 0 00-.711-.466m-3.41.596a2.993 2.993 0 00-.042 4.197A3.016 3.016 0 0014 14.25"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M20.042 16.045A9 9 0 007.955 3.958M5.637 5.635a9 9 0 1012.725 12.73M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CopyrightOffIcon;
/* prettier-ignore-end */
