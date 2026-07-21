/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GuitarPickIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GuitarPickIcon(props: GuitarPickIconProps) {
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
          "M16 18.5C18 16 20 12 20 8c0-2.946-2.084-4.157-4.204-4.654C14.932 3.116 13.666 3 12 3c-1.667 0-2.932.115-3.796.346C6.084 3.843 4 5.054 4 8c0 3.312 2 8 4 10.5.297.37.618.731.963 1.081l.354.347a3.9 3.9 0 005.364 0c.472-.445.913-.922 1.319-1.428z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GuitarPickIcon;
/* prettier-ignore-end */
