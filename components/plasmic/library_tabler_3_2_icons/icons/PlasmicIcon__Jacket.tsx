/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type JacketIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function JacketIcon(props: JacketIconProps) {
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
        d={"M16 3l-4 5-4-5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12 19a2 2 0 01-2 2H6a2 2 0 01-2-2v-8.172a2 2 0 01.586-1.414l.828-.828A2 2 0 006 7.172V5a2 2 0 012-2h8a2 2 0 012 2v2.172a2 2 0 00.586 1.414l.828.828A2 2 0 0120 10.828V19a2 2 0 01-2 2h-4a2 2 0 01-2-2z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M20 13h-3a1 1 0 00-1 1v2a1 1 0 001 1h3M4 17h3a1 1 0 001-1v-2a1 1 0 00-1-1H4m8 6V8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default JacketIcon;
/* prettier-ignore-end */
