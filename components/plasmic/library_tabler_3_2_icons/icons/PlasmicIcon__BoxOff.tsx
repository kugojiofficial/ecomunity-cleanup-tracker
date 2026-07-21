/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoxOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoxOffIcon(props: BoxOffIconProps) {
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
          "M17.765 17.757L12 21l-8-4.5v-9l2.236-1.258m2.57-1.445L12 3l8 4.5V16m-5.439-5.441L20 7.5M12 12v9m0-9L4 7.5M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BoxOffIcon;
/* prettier-ignore-end */
