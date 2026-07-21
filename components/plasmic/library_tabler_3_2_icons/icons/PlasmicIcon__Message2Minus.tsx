/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Message2MinusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Message2MinusIcon(props: Message2MinusIconProps) {
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
          "M8 9h8m-8 4h6m-2 8l-3-3H6a3 3 0 01-3-3V7a3 3 0 013-3h12a3 3 0 013 3v8m-5 4h6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Message2MinusIcon;
/* prettier-ignore-end */
