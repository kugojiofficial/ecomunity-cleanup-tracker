/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FoldIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FoldIcon(props: FoldIconProps) {
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
          "M12 3v6m0 0l3-3m-3 3L9 6m3 15v-6m0 0l3 3m-3-3l-3 3m-5-6h1m4 0h1m4 0h1m4 0h1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FoldIcon;
/* prettier-ignore-end */
