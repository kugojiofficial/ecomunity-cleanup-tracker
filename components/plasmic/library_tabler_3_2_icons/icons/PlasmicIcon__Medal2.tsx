/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Medal2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Medal2Icon(props: Medal2IconProps) {
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
          "M9 3h6l3 7-6 2-6-2 3-7zm3 9L9 3m6 8l-3-8m0 16.5L9 21l.5-3.5-2-2 3-.5 1.5-3 1.5 3 3 .5-2 2L15 21l-3-1.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Medal2Icon;
/* prettier-ignore-end */
