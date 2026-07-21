/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandUpworkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandUpworkIcon(props: BrandUpworkIconProps) {
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
          "M3 7v5a3 3 0 006 0V7h1l4 6c.824 1.319 1.945 2 3.5 2a3.5 3.5 0 100-7c-2.027 0-3.137 1-3.5 3-.242 1.33-.908 4-2 8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandUpworkIcon;
/* prettier-ignore-end */
