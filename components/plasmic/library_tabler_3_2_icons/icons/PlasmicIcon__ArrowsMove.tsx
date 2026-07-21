/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowsMoveIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowsMoveIcon(props: ArrowsMoveIconProps) {
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
          "M18 9l3 3-3 3m-3-3h6M6 9l-3 3 3 3m-3-3h6m0 6l3 3 3-3m-3-3v6m3-15l-3-3-3 3m3-3v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArrowsMoveIcon;
/* prettier-ignore-end */
