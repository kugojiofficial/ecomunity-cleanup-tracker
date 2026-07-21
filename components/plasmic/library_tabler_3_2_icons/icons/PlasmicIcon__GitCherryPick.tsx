/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GitCherryPickIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GitCherryPickIcon(props: GitCherryPickIconProps) {
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
          "M4 12a3 3 0 106 0 3 3 0 00-6 0zm3-9v6m0 6v6m6-14h2.5l1.5 5-1.5 5H13m4-5h3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GitCherryPickIcon;
/* prettier-ignore-end */
