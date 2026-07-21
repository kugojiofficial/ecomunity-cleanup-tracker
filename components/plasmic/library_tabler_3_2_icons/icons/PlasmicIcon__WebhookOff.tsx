/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WebhookOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WebhookOffIcon(props: WebhookOffIconProps) {
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
          "M4.876 13.61A4 4 0 1011 17h6m-1.934 3.502a4 4 0 004.763-.675M21 17a4 4 0 00-4-4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M16 8a4 4 0 00-6.824-2.833M8 8c0 1.506.77 2.818 2 3.5L7 17M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WebhookOffIcon;
/* prettier-ignore-end */
