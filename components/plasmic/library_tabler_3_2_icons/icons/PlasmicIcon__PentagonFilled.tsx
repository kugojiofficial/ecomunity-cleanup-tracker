/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PentagonFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PentagonFilledIcon(props: PentagonFilledIconProps) {
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
          "M10.205 2.6l-6.96 5.238A3 3 0 002.2 11.176l2.896 8.765A3 3 0 007.946 22h8.12a3 3 0 002.841-2.037l2.973-8.764a3 3 0 00-1.05-3.37l-7.033-5.237-.091-.061-.018-.01-.106-.07a3 3 0 00-3.377.149z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PentagonFilledIcon;
/* prettier-ignore-end */
