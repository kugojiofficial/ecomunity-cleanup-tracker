/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NewsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NewsIcon(props: NewsIconProps) {
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
          "M16 6h3a1 1 0 011 1v11a2 2 0 01-2 2m0 0a2 2 0 01-2-2V5a1 1 0 00-1-1H5a1 1 0 00-1 1v12a3 3 0 003 3h11zM8 8h4m-4 4h4m-4 4h4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default NewsIcon;
/* prettier-ignore-end */
