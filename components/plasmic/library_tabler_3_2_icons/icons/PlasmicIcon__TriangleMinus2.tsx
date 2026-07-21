/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TriangleMinus2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TriangleMinus2Icon(props: TriangleMinus2IconProps) {
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
          "M20.48 15.016L13.637 3.59a1.913 1.913 0 00-3.274 0L2.257 17.125a1.914 1.914 0 001.636 2.871H12M16 19h6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TriangleMinus2Icon;
/* prettier-ignore-end */
