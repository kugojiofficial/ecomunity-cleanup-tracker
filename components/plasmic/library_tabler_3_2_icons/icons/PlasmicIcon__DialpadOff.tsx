/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DialpadOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DialpadOffIcon(props: DialpadOffIconProps) {
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
          "M7 7H3V3m14 0h4v4h-4V3zm-7 3V3h4v4h-3m-8 3h4v4H3v-4zm14 3v-3h4v4h-3m-4 0h-4v-4m0 7h4v4h-4v-4zM3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DialpadOffIcon;
/* prettier-ignore-end */
