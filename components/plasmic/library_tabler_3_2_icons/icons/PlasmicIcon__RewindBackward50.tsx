/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RewindBackward50IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RewindBackward50Icon(props: RewindBackward50IconProps) {
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
          "M19.007 16.466A6 6 0 0015 6H4m8 9.5v3a1.5 1.5 0 103 0v-3a1.5 1.5 0 10-3 0zM6 20h1.5a1.5 1.5 0 100-3H6v-3h3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M7 9L4 6l3-3"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RewindBackward50Icon;
/* prettier-ignore-end */
