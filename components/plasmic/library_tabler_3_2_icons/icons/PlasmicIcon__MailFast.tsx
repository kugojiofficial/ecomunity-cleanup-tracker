/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MailFastIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MailFastIcon(props: MailFastIconProps) {
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
          "M3 7h3m-3 4h2m4.02-2.199l-.6 6A2 2 0 0010.41 17h7.98a2 2 0 001.99-1.801l.6-6A2 2 0 0018.99 7h-7.98a2 2 0 00-1.99 1.801z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M9.8 7.5l2.982 3.28a3.002 3.002 0 004.238.202L20.3 8"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MailFastIcon;
/* prettier-ignore-end */
