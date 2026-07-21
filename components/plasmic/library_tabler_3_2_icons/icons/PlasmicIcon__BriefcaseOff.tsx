/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BriefcaseOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BriefcaseOffIcon(props: BriefcaseOffIconProps) {
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
          "M11 7h8a2 2 0 012 2v8m-1.166 2.818c-.262.12-.546.182-.834.182H5a2 2 0 01-2-2V9a2 2 0 012-2h2m1.185-2.842A2 2 0 0110 3h4a2 2 0 012 2v2m-4 5v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M3 13a20 20 0 0011.905 1.928m3.263-.763C19.14 13.85 20.088 13.46 21 13M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BriefcaseOffIcon;
/* prettier-ignore-end */
