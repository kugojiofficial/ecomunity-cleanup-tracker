/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Hierarchy3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Hierarchy3Icon(props: Hierarchy3IconProps) {
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
          "M10 5a2 2 0 104 0 2 2 0 00-4 0zm-4 7a2 2 0 104 0 2 2 0 00-4 0zm4 7a2 2 0 104 0 2 2 0 00-4 0zm8 0a2 2 0 104 0 2 2 0 00-4 0zM2 19a2 2 0 104 0 2 2 0 00-4 0zm12-7a2 2 0 104 0 2 2 0 00-4 0zm-9 5l2-3m2-4l2-3m2 0l2 3m2 4l2 3m-4-3l-2 3m-4-3l2 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Hierarchy3Icon;
/* prettier-ignore-end */
