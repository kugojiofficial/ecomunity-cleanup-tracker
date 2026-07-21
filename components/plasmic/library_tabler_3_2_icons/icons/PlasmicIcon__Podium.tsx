/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PodiumIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PodiumIcon(props: PodiumIconProps) {
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
          "M5 8h14l-.621 2.485A2 2 0 0116.439 12H7.561a2 2 0 01-1.94-1.515L5 8zm2 0V6a3 3 0 013-3m-2 9l1 9m7-9l-1 9m-8 0h10"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PodiumIcon;
/* prettier-ignore-end */
