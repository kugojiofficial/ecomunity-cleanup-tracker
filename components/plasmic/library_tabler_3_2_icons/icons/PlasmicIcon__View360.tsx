/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type View360IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function View360Icon(props: View360IconProps) {
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
        d={"M3 12a9 9 0 1018.001 0A9 9 0 003 12z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8 12c0 2.387.421 4.676 1.172 6.364C9.922 20.052 10.939 21 12 21c1.06 0 2.078-.948 2.828-2.636C15.578 16.676 16 14.387 16 12s-.421-4.676-1.172-6.364C14.078 3.948 13.061 3 12 3c-1.06 0-2.078.948-2.828 2.636C8.422 7.324 8 9.613 8 12z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M3 12c0 2.21 4.03 4 9 4s9-1.79 9-4-4.03-4-9-4-9 1.79-9 4z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default View360Icon;
/* prettier-ignore-end */
