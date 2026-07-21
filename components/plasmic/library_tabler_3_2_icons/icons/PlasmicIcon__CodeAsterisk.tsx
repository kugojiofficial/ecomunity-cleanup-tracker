/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CodeAsteriskIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CodeAsteriskIcon(props: CodeAsteriskIconProps) {
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
          "M6 19a2 2 0 01-2-2v-4l-1-1 1-1V7a2 2 0 012-2m6 6.875l3-1.687m-3 1.687v3.375m0-3.375l-3-1.687m3 1.687l3 1.688M12 8.5v3.375m0 0l-3 1.688M18 19a2 2 0 002-2v-4l1-1-1-1V7a2 2 0 00-2-2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CodeAsteriskIcon;
/* prettier-ignore-end */
