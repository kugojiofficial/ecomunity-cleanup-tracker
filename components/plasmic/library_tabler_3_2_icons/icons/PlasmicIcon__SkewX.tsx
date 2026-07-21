/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SkewXIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SkewXIcon(props: SkewXIconProps) {
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
          "M4 5.205v13.59a1 1 0 001.184.983l14-2.625A1 1 0 0020 16.17V7.83a1 1 0 00-.816-.983l-14-2.625A1 1 0 004 5.205z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SkewXIcon;
/* prettier-ignore-end */
