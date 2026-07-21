/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NewSectionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NewSectionIcon(props: NewSectionIconProps) {
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
          "M9 12h6m-3-3v6M4 6V5a1 1 0 011-1h1m5 0h2m5 0h1a1 1 0 011 1v1m0 5v2m0 5v1a1 1 0 01-1 1h-1m-5 0h-2m-5 0H5a1 1 0 01-1-1v-1m0-5v-2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default NewSectionIcon;
/* prettier-ignore-end */
