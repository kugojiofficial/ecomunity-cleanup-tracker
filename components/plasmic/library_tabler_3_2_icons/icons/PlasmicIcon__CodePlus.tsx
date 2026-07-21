/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CodePlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CodePlusIcon(props: CodePlusIconProps) {
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
          "M9 12h6m-3-3v6m-6 4a2 2 0 01-2-2v-4l-1-1 1-1V7a2 2 0 012-2m12 14a2 2 0 002-2v-4l1-1-1-1V7a2 2 0 00-2-2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CodePlusIcon;
/* prettier-ignore-end */
