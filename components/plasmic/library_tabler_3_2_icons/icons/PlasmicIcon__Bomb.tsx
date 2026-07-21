/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BombIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BombIcon(props: BombIconProps) {
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
          "M15.349 5.349L18.65 8.65a1.2 1.2 0 010 1.698l-.972.972a7.5 7.5 0 11-5-5l.972-.972a1.2 1.2 0 011.698 0l.001.001z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M17 7l1.293-1.293A2.413 2.413 0 0019 4a1 1 0 011-1h1M7 13a3 3 0 013-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BombIcon;
/* prettier-ignore-end */
