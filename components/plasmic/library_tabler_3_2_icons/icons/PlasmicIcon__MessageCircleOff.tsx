/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MessageCircleOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MessageCircleOffIcon(props: MessageCircleOffIconProps) {
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
          "M8.595 4.577c3.223-1.176 7.025-.61 9.65 1.63 2.982 2.543 3.601 6.523 1.636 9.66m-1.908 2.109C15.186 20.166 11.083 20.642 7.7 19L3 20l1.3-3.9C2.071 12.804 2.806 8.589 5.98 6.043M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MessageCircleOffIcon;
/* prettier-ignore-end */
