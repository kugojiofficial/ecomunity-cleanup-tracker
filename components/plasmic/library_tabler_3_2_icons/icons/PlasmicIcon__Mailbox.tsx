/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MailboxIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MailboxIcon(props: MailboxIconProps) {
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
          "M10 21v-6.5A3.5 3.5 0 006.5 11m0 0A3.5 3.5 0 003 14.5V21h18v-6a4 4 0 00-4-4H6.5zm5.5 0V3h4l2 2-2 2h-4m-6 8h1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MailboxIcon;
/* prettier-ignore-end */
