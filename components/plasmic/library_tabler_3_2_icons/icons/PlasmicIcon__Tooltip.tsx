/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TooltipIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TooltipIcon(props: TooltipIconProps) {
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
          "M10 18a2 2 0 104 0 2 2 0 00-4 0zm2-5l-1.707-1.707A1 1 0 009.586 11H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v3a2 2 0 01-2 2h-2.586a1 1 0 00-.707.293L12 13z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TooltipIcon;
/* prettier-ignore-end */
