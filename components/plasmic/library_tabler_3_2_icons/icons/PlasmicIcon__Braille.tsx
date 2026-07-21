/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrailleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrailleIcon(props: BrailleIconProps) {
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
          "M15 5a1 1 0 102 0 1 1 0 00-2 0zM7 5a1 1 0 102 0 1 1 0 00-2 0zm0 14a1 1 0 102 0 1 1 0 00-2 0zm9-7h.01M8 12h.01M16 19h.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrailleIcon;
/* prettier-ignore-end */
