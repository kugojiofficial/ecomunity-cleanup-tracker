/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SchoolIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SchoolIcon(props: SchoolIconProps) {
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
        d={"M22 9L12 5 2 9l10 4 10-4zm0 0v6"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M6 10.6V16c0 .796.632 1.559 1.757 2.121C8.883 18.684 10.41 19 12 19c1.591 0 3.117-.316 4.243-.879C17.368 17.56 18 16.796 18 16v-5.4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SchoolIcon;
/* prettier-ignore-end */
