/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NotificationOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NotificationOffIcon(props: NotificationOffIconProps) {
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
          "M6.154 6.187A2 2 0 005 8v9a2 2 0 002 2h9a2 2 0 001.811-1.151M14 7a3 3 0 106 0 3 3 0 00-6 0zM3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default NotificationOffIcon;
/* prettier-ignore-end */
