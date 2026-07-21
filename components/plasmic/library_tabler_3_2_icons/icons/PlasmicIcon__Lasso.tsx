/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LassoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LassoIcon(props: LassoIconProps) {
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
          "M4.028 13.252C3.371 12.28 3 11.174 3 10c0-3.866 4.03-7 9-7s9 3.134 9 7-4.03 7-9 7c-1.913 0-3.686-.464-5.144-1.255"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M3 15a2 2 0 104 0 2 2 0 00-4 0zm2 2c0 1.42.316 2.805 1 4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LassoIcon;
/* prettier-ignore-end */
