/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MilkshakeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MilkshakeIcon(props: MilkshakeIconProps) {
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
          "M17 10a5 5 0 00-10 0m-1 1a1 1 0 011-1h10a1 1 0 011 1v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-1zm1 2l1.81 7.243a1 1 0 00.97.757h4.44a1 1 0 00.97-.757L17 13m-5-8V3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MilkshakeIcon;
/* prettier-ignore-end */
