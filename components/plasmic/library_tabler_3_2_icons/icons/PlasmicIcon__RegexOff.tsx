/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RegexOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RegexOffIcon(props: RegexOffIconProps) {
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
          "M6.5 15a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM17 7.875l3-1.687m-3 1.687v3.375m0-3.375l-3-1.687m3 1.687l3 1.688M17 4.5v3.375m0 0l-3 1.688M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RegexOffIcon;
/* prettier-ignore-end */
