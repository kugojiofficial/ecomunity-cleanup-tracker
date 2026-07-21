/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type KeyframeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function KeyframeIcon(props: KeyframeIconProps) {
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
          "M13.225 18.412A1.595 1.595 0 0112 19c-.468 0-.914-.214-1.225-.588l-4.361-5.248a1.844 1.844 0 010-2.328l4.361-5.248A1.595 1.595 0 0112 5c.468 0 .914.214 1.225.588l4.361 5.248a1.844 1.844 0 010 2.328l-4.361 5.248z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default KeyframeIcon;
/* prettier-ignore-end */
