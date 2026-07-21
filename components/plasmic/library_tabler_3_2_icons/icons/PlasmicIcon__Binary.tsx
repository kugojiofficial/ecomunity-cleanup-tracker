/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BinaryIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BinaryIcon(props: BinaryIconProps) {
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
          "M11 10V5h-1m8 14v-5h-1m-2-8.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-4zm-5 9a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-4zM6 10h.01M6 19h.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BinaryIcon;
/* prettier-ignore-end */
