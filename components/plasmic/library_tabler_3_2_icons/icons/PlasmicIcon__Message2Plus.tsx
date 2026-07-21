/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Message2PlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Message2PlusIcon(props: Message2PlusIconProps) {
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
          "M8 9h8m-8 4h6m-1.5 7.5l-.5.5-3-3H6a3 3 0 01-3-3V7a3 3 0 013-3h12a3 3 0 013 3v5.5M16 19h6m-3-3v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Message2PlusIcon;
/* prettier-ignore-end */
