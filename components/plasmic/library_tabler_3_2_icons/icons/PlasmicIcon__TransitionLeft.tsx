/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TransitionLeftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TransitionLeftIcon(props: TransitionLeftIconProps) {
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
          "M6 21a3 3 0 01-3-3V6a3 3 0 013-3m15 3v12a3 3 0 01-6 0V6a3 3 0 016 0zm-6 6H7m3-3l-3 3 3 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TransitionLeftIcon;
/* prettier-ignore-end */
