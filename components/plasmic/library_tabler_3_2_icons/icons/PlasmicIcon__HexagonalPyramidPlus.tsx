/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HexagonalPyramidPlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HexagonalPyramidPlusIcon(props: HexagonalPyramidPlusIconProps) {
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
          "M18.642 12.04l-5.804-9.583a.996.996 0 00-1.676 0L3.316 15.411a1.988 1.988 0 00.267 2.483l2.527 2.523c.374.373.88.583 1.408.583H12.5M12 2L7 20.9M12 2l3.304 12.489M16 19h6m-3-3v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HexagonalPyramidPlusIcon;
/* prettier-ignore-end */
