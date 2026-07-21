/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Category2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Category2Icon(props: Category2IconProps) {
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
          "M14 4h6v6h-6V4zM4 14h6v6H4v-6zm10 3a3 3 0 106 0 3 3 0 00-6 0zM4 7a3 3 0 106 0 3 3 0 00-6 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Category2Icon;
/* prettier-ignore-end */
