/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InfinityOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InfinityOffIcon(props: InfinityOffIconProps) {
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
          "M8.165 8.174a4 4 0 101.663 6.654A9.998 9.998 0 0012 12a9.998 9.998 0 002.172 2.828 4 4 0 001.608.981m-2.103-6.156c.16-.166.325-.326.495-.481a4 4 0 115.129 6.1M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default InfinityOffIcon;
/* prettier-ignore-end */
