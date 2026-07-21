/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ListLettersIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ListLettersIcon(props: ListLettersIconProps) {
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
          "M11 6h9m-9 6h9m-9 6h9M4 10V5.5a1.5 1.5 0 013 0V10M4 8h3m-1.5 9a1.5 1.5 0 110 3H4v-6h1.5a1.5 1.5 0 110 3zm0 0H4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ListLettersIcon;
/* prettier-ignore-end */
