/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Send2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Send2Icon(props: Send2IconProps) {
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
          "M4.698 4.034L21 12 4.698 19.966a.503.503 0 01-.546-.124.555.555 0 01-.12-.568L6.5 12 4.032 4.726a.555.555 0 01.12-.568.503.503 0 01.546-.124zM6.5 12H21"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Send2Icon;
/* prettier-ignore-end */
