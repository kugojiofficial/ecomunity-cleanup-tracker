/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PaperBagOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PaperBagOffIcon(props: PaperBagOffIconProps) {
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
          "M7.158 3.185C7.414 3.066 7.7 3 8 3h8a2 2 0 012 2v1.82a5 5 0 00.528 2.236l.944 1.888A5 5 0 0120 13.18V16m-.177 3.824A1.999 1.999 0 0118 21H6a2 2 0 01-2-2v-5.82a5 5 0 01.528-2.236L6 8V6m7.185 7.173a1.999 1.999 0 102.64 2.647"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6 21a2 2 0 002-2v-5.82a5 5 0 00-.528-2.236L6 8m5-1h2M3 3l18 18"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PaperBagOffIcon;
/* prettier-ignore-end */
