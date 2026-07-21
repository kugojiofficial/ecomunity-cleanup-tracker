/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BellUpIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BellUpIcon(props: BellUpIconProps) {
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
          "M12.5 17H4a4 4 0 002-3v-3a7 7 0 014-6 2 2 0 114 0 7 7 0 014 6v1m-9 5v1a3 3 0 003.49 2.96M19 22v-6m3 3l-3-3-3 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BellUpIcon;
/* prettier-ignore-end */
