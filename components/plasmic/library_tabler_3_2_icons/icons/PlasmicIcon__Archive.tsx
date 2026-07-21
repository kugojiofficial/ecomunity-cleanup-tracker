/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArchiveIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArchiveIcon(props: ArchiveIconProps) {
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
          "M3 6a2 2 0 012-2h14a2 2 0 010 4H5a2 2 0 01-2-2zm2 2v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArchiveIcon;
/* prettier-ignore-end */
