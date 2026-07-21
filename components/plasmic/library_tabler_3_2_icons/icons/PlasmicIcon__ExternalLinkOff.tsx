/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ExternalLinkOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ExternalLinkOffIcon(props: ExternalLinkOffIconProps) {
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
          "M7 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-1m-7-3l2-2m2.007-2.007l6-6M15 4h5v5M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ExternalLinkOffIcon;
/* prettier-ignore-end */
