/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BabyBottleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BabyBottleIcon(props: BabyBottleIconProps) {
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
          "M5 10h14m-7-8v2m0 0a5 5 0 015 5v11a2 2 0 01-2 2H9a2 2 0 01-2-2V9a5 5 0 015-5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BabyBottleIcon;
/* prettier-ignore-end */
