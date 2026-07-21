/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TreeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TreeIcon(props: TreeIconProps) {
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
          "M12 13l-2-2m2 1l2-2m-2 11V8m-2.176 8a3 3 0 01-2.743-3.69 3 3 0 01.304-4.833A3 3 0 0112 3.77a3 3 0 014.614 3.707 3 3 0 01.305 4.833A3 3 0 0114 16.005h-4L9.824 16z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TreeIcon;
/* prettier-ignore-end */
