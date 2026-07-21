/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhoneOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhoneOffIcon(props: PhoneOffIconProps) {
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
          "M3 21L21 3M5.831 14.161A15.946 15.946 0 013 6a2 2 0 012-2h4l2 5-2.5 1.5c.108.22.223.435.345.645m1.751 2.277A11.03 11.03 0 0013.5 15.5L15 13l5 2v4a2 2 0 01-2 2 15.963 15.963 0 01-10.344-4.657"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PhoneOffIcon;
/* prettier-ignore-end */
