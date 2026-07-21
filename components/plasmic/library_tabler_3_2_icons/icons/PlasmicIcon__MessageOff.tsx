/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MessageOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MessageOffIcon(props: MessageOffIconProps) {
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
          "M8 9h1m4 0h3m-8 4h5M8 4h10a3 3 0 013 3v8c0 .577-.163 1.116-.445 1.573M18 18h-5l-5 3v-3H6a3 3 0 01-3-3V7c0-1.085.576-2.036 1.439-2.562M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MessageOffIcon;
/* prettier-ignore-end */
