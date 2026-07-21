/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PointerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PointerIcon(props: PointerIconProps) {
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
          "M7.904 17.563a1.2 1.2 0 002.228.308l2.09-3.093 4.907 4.907a1.066 1.066 0 001.509 0l1.047-1.047a1.066 1.066 0 000-1.509l-4.907-4.907 3.113-2.09a1.2 1.2 0 00-.309-2.228L4 4l3.904 13.563z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PointerIcon;
/* prettier-ignore-end */
