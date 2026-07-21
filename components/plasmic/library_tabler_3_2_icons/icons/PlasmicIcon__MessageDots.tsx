/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MessageDotsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MessageDotsIcon(props: MessageDotsIconProps) {
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
          "M4 21V8a3 3 0 013-3h10a3 3 0 013 3v6a3 3 0 01-3 3H8l-4 4zm8-10v.01M8 11v.01m8-.01v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MessageDotsIcon;
/* prettier-ignore-end */
