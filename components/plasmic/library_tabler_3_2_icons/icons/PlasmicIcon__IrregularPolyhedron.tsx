/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IrregularPolyhedronIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IrregularPolyhedronIcon(props: IrregularPolyhedronIconProps) {
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
          "M6 12l-1.752 6.13a1 1 0 00.592 1.205l6.282 2.503a2.46 2.46 0 001.756 0l6.282-2.503a1 1 0 00.592-1.204L18 12l1.752-6.13a1 1 0 00-.592-1.205l-6.282-2.503a2.46 2.46 0 00-1.756 0L4.84 4.665a1 1 0 00-.592 1.204L6 12z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M4.5 5.5l6.622 2.33a2.35 2.35 0 001.756 0L19.5 5.5M6 12l5.21 1.862a2.34 2.34 0 001.58 0L18 12m-6 10V8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IrregularPolyhedronIcon;
/* prettier-ignore-end */
