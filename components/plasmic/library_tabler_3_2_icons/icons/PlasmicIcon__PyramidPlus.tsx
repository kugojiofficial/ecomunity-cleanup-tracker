/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PyramidPlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PyramidPlusIcon(props: PyramidPlusIconProps) {
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
          "M18.719 11.985L12.83 2.446a.999.999 0 00-1.664 0l-8.54 13.836a1.005 1.005 0 00.386 1.452l8.092 4.054a1.994 1.994 0 001.789 0l.149-.074M12 2v20m4-3h6m-3-3v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PyramidPlusIcon;
/* prettier-ignore-end */
