/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WorldWwwIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WorldWwwIcon(props: WorldWwwIconProps) {
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
          "M19.5 7A9 9 0 0012 3a8.991 8.991 0 00-7.484 4M11.5 3a16.987 16.987 0 00-1.826 4M12.5 3a16.99 16.99 0 011.828 4M19.5 17a9 9 0 01-7.5 4 8.991 8.991 0 01-7.484-4m6.984 4a16.987 16.987 0 01-1.826-4m2.826 4a16.99 16.99 0 001.828-4M2 10l1 4 1.5-4L6 14l1-4m10 0l1 4 1.5-4 1.5 4 1-4M9.5 10l1 4 1.5-4 1.5 4 1-4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WorldWwwIcon;
/* prettier-ignore-end */
