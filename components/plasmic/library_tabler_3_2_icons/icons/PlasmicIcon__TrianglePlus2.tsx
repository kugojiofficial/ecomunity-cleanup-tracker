/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TrianglePlus2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TrianglePlus2Icon(props: TrianglePlus2IconProps) {
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
          "M18.69 12.027L13.636 3.59a1.913 1.913 0 00-3.274 0L2.257 17.125a1.914 1.914 0 001.636 2.871H12M16 19h6m-3-3v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TrianglePlus2Icon;
/* prettier-ignore-end */
