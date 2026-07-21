/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BinaryTreeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BinaryTreeIcon(props: BinaryTreeIconProps) {
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
          "M6 20a2 2 0 10-4 0 2 2 0 004 0zM16 4a2 2 0 10-4 0 2 2 0 004 0zm0 16a2 2 0 10-4 0 2 2 0 004 0zm-5-8a2 2 0 10-4 0 2 2 0 004 0zm10 0a2 2 0 10-4 0 2 2 0 004 0zM5.058 18.306l2.88-4.606m2.123-3.397l2.877-4.604m-2.873 8.006l2.876 4.6M15.063 5.7l2.881 4.61"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BinaryTreeIcon;
/* prettier-ignore-end */
