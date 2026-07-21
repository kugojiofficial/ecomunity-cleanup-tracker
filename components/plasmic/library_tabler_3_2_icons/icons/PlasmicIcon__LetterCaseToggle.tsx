/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LetterCaseToggleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LetterCaseToggleIcon(props: LetterCaseToggleIconProps) {
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
          "M3 15.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zM14 19V8.5a3.5 3.5 0 117 0V19m-7-6h7m-11-1v7"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LetterCaseToggleIcon;
/* prettier-ignore-end */
