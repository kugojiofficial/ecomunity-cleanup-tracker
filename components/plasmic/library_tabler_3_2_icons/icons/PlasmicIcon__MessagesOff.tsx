/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MessagesOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MessagesOffIcon(props: MessagesOffIconProps) {
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
          "M3 3l18 18M11 11a1 1 0 01-1-1m0-3.968V4a1 1 0 011-1h9a1 1 0 011 1v10l-3-3h-3m-1 4v2a1 1 0 01-1 1H6l-3 3V11a1 1 0 011-1h2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MessagesOffIcon;
/* prettier-ignore-end */
