/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LollipopOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LollipopOffIcon(props: LollipopOffIconProps) {
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
          "M7.462 7.493a7 7 0 009.06 9.039m2.416-1.57a7 7 0 10-9.884-9.915M21 10a3.5 3.5 0 10-7 0m-1.29 2.715A3.5 3.5 0 017 10"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M14 17c.838 0 1.607-.294 2.209-.785M17.5 13.5A3.5 3.5 0 0014 10m0-7a3.5 3.5 0 00-3.5 3.5M3 21l6-6M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LollipopOffIcon;
/* prettier-ignore-end */
