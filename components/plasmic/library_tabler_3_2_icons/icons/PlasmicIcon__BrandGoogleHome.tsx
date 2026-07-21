/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandGoogleHomeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandGoogleHomeIcon(props: BrandGoogleHomeIconProps) {
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
          "M19.072 21H4.928A1.928 1.928 0 013 19.072v-6.857c0-.512.203-1 .566-1.365l7.07-7.063a1.927 1.927 0 012.727 0l7.071 7.063c.363.362.566.853.566 1.365v6.857A1.928 1.928 0 0119.072 21z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M7 13v4h10v-4l-5-5m2.8-2.8L3 17m4 0v4m10-4v4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandGoogleHomeIcon;
/* prettier-ignore-end */
