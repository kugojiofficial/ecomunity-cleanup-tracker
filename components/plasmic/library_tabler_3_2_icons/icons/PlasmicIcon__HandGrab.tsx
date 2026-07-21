/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HandGrabIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HandGrabIcon(props: HandGrabIconProps) {
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
          "M8 11V7.5a1.5 1.5 0 013 0V10m0-.5v-3a1.5 1.5 0 113 0V10m0-2.5a1.5 1.5 0 113 0V10"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M17 9.5a1.5 1.5 0 113 0V14a6 6 0 01-6 6h-2 .208a6 6 0 01-5.012-2.7L7 17c-.312-.479-1.407-2.388-3.286-5.728A1.5 1.5 0 014.25 9.25a1.867 1.867 0 012.28.28L8 11"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HandGrabIcon;
/* prettier-ignore-end */
