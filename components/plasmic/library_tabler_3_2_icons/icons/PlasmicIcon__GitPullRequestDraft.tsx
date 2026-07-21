/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GitPullRequestDraftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GitPullRequestDraftIcon(props: GitPullRequestDraftIconProps) {
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
          "M4 18a2 2 0 104 0 2 2 0 00-4 0zM4 6a2 2 0 104 0 2 2 0 00-4 0zm12 12a2 2 0 104 0 2 2 0 00-4 0zM6 8v8m12-5h.01M18 6h.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GitPullRequestDraftIcon;
/* prettier-ignore-end */
