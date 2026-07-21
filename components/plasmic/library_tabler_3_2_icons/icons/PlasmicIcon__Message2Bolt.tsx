/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Message2BoltIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Message2BoltIcon(props: Message2BoltIconProps) {
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
          "M8 9h8m-8 4h6m-1 7l-1 1-3-3H6a3 3 0 01-3-3V7a3 3 0 013-3h12a3 3 0 013 3v5.5M19 16l-2 3h4l-2 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Message2BoltIcon;
/* prettier-ignore-end */
