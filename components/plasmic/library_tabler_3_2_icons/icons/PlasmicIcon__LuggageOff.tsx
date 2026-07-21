/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LuggageOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LuggageOffIcon(props: LuggageOffIconProps) {
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
          "M10 6h6a2 2 0 012 2v6m0 4a2 2 0 01-2 2H8a2 2 0 01-2-2V8c0-.546.218-1.04.573-1.4M9 5a2 2 0 012-2h2a2 2 0 012 2v1m-9 4h4m4 0h4M6 16h10m-7 4v1m6-1v1M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LuggageOffIcon;
/* prettier-ignore-end */
