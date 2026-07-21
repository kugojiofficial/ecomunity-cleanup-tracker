/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InnerShadowLeftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InnerShadowLeftIcon(props: InnerShadowLeftIconProps) {
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
          "M5.636 5.636a9 9 0 1112.728 12.728A9 9 0 015.636 5.636zm2.121 10.607a6 6 0 010-8.486"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default InnerShadowLeftIcon;
/* prettier-ignore-end */
