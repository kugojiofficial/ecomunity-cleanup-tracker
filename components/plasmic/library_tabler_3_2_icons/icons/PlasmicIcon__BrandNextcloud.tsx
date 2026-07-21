/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandNextcloudIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandNextcloudIcon(props: BrandNextcloudIconProps) {
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
          "M7 12a5 5 0 1010 0 5 5 0 00-10 0zm-5 .5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zm15 0a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandNextcloudIcon;
/* prettier-ignore-end */
