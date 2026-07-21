/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandSkypeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandSkypeIcon(props: BrandSkypeIconProps) {
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
          "M12 3a9 9 0 018.603 11.65 4.5 4.5 0 01-5.953 5.953A9 9 0 013.397 9.35 4.5 4.5 0 019.35 3.396 8.987 8.987 0 0112 3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8 14.5c.5 2 2.358 2.5 4 2.5 2.905 0 4-1.187 4-2.5 0-1.503-1.927-2.5-4-2.5s-4-1-4-2.5C8 8.187 9.095 7 12 7c1.642 0 3.5.5 4 2.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandSkypeIcon;
/* prettier-ignore-end */
