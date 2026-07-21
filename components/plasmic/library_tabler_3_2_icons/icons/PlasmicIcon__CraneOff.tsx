/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CraneOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CraneOffIcon(props: CraneOffIconProps) {
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
          "M6 21h6m-3 0V9m0-4V3L8 4M6 6L3 9h6m4 0h8M9 3l10 6m-2 0v4a2 2 0 012 2m-2 2a2 2 0 01-2-2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CraneOffIcon;
/* prettier-ignore-end */
