/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EyeCheckIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EyeCheckIcon(props: EyeCheckIconProps) {
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
        d={"M10 12a2 2 0 104 0 2 2 0 00-4 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M11.102 17.957C7.898 17.65 5.198 15.663 3 12c2.4-4 5.4-6 9-6 3.6 0 6.6 2 9 6-.21.35-.431.695-.663 1.032M15 19l2 2 4-4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default EyeCheckIcon;
/* prettier-ignore-end */
