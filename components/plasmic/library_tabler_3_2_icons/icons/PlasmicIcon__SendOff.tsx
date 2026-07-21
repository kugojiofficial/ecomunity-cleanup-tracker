/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SendOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SendOffIcon(props: SendOffIconProps) {
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
          "M10 14l2-2m2-2l7-7M10.718 6.713L21 3l-3.715 10.289m-1.063 2.941L14.5 21a.55.55 0 01-1 0L10 14l-7-3.5a.55.55 0 010-1l4.772-1.723M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SendOffIcon;
/* prettier-ignore-end */
