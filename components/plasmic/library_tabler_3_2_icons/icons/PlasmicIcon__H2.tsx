/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type H2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function H2Icon(props: H2IconProps) {
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
          "M17 12a2 2 0 014 0c0 .591-.417 1.318-.816 1.858L17 18.001h4M4 6v12m8-12v12m-1 0h2M3 18h2m-1-6h8M3 6h2m6 0h2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default H2Icon;
/* prettier-ignore-end */
