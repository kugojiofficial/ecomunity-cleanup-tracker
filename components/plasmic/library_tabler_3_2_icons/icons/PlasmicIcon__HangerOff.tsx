/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HangerOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HangerOffIcon(props: HangerOffIconProps) {
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
          "M14 6a2 2 0 10-4 0m6.506 6.506l3.461 1.922a2 2 0 011.029 1.749V17m-2 2h-14a2 2 0 01-2-2v-.823a2 2 0 011.029-1.749l6.673-3.707M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HangerOffIcon;
/* prettier-ignore-end */
