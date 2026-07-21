/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GitBranchDeletedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GitBranchDeletedIcon(props: GitBranchDeletedIconProps) {
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
          "M5 18a2 2 0 104 0 2 2 0 00-4 0zM5 6a2 2 0 104 0 2 2 0 00-4 0zm2 2v8m2 2h6a2 2 0 002-2v-5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M14 14l3-3 3 3M15 4l4 4m-4 0l4-4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GitBranchDeletedIcon;
/* prettier-ignore-end */
