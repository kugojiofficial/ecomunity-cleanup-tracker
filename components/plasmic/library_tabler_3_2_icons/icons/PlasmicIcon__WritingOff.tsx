/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WritingOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WritingOffIcon(props: WritingOffIconProps) {
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
          "M16 7h4m-4 9v1l2 2 .5-.5M20 16V5c0-1.121-.879-2-2-2s-2 .879-2 2v7m2 7H5a2 2 0 110-4h4a2 2 0 100-4H6M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WritingOffIcon;
/* prettier-ignore-end */
