/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LetterCaseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LetterCaseIcon(props: LetterCaseIconProps) {
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
          "M14 15.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zM3 19V8.5a3.5 3.5 0 117 0V19m-7-6h7m11-1v7"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LetterCaseIcon;
/* prettier-ignore-end */
