/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FolderStarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FolderStarIcon(props: FolderStarIconProps) {
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
          "M10 19H5a2 2 0 01-2-2V6a2 2 0 012-2h4l3 3h7a2 2 0 012 2v2.5m-3.2 9.317l-2.172 1.138a.392.392 0 01-.568-.41l.415-2.411-1.757-1.707a.39.39 0 01.217-.665l2.428-.352 1.086-2.193a.392.392 0 01.702 0l1.086 2.193 2.428.352a.391.391 0 01.217.665l-1.757 1.707.414 2.41a.39.39 0 01-.567.411L17.8 20.817z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FolderStarIcon;
/* prettier-ignore-end */
