/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RefreshOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RefreshOffIcon(props: RefreshOffIconProps) {
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
          "M20 11A8.1 8.1 0 008.729 4.695m-2.41 1.624A8.083 8.083 0 004.5 9M4 5v4h4m-4 4a8.1 8.1 0 0013.671 4.691M20 16v-1h-1M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RefreshOffIcon;
/* prettier-ignore-end */
