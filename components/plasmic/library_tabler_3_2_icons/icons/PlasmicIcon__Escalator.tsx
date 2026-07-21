/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EscalatorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EscalatorIcon(props: EscalatorIconProps) {
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
          "M19.5 5h-2.672a2 2 0 00-1.414.586L7 14H4.5a2.5 2.5 0 000 5h3.672a2 2 0 001.414-.586L18 10h1.5a2.5 2.5 0 000-5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default EscalatorIcon;
/* prettier-ignore-end */
