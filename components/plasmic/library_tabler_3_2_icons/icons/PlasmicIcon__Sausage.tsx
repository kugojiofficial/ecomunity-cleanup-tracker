/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SausageIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SausageIcon(props: SausageIconProps) {
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
          "M5.5 5.5A2.5 2.5 0 003 8c0 7.18 5.82 13 13 13a2.5 2.5 0 000-5 8 8 0 01-8-8 2.5 2.5 0 00-2.5-2.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5.195 5.519L3.952 3.53A1 1 0 014.8 2h1.392a1 1 0 01.848 1.53L5.795 5.52m12.687 12.705l1.989-1.243a1 1 0 011.53.848v1.392a1 1 0 01-1.53.848l-1.991-1.245"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SausageIcon;
/* prettier-ignore-end */
