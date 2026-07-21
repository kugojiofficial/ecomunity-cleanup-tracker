/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CrystalBallIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CrystalBallIcon(props: CrystalBallIconProps) {
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
          "M6.73 17.018a8 8 0 1110.54 0M5 19a2 2 0 002 2h10a2 2 0 000-4H7a2 2 0 00-2 2zm6-12a3 3 0 00-3 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CrystalBallIcon;
/* prettier-ignore-end */
