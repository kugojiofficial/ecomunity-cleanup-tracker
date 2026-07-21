/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BeachIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BeachIcon(props: BeachIconProps) {
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
          "M17.553 16.75a7.5 7.5 0 00-10.606 0M18 3.804A6 6 0 009.804 6l10.392 6A6 6 0 0018 3.804z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M16.732 10C18.39 7.13 18.957 4.356 18 3.804 17.043 3.252 14.925 5.13 13.268 8M15 9l-3 5.196M3 19.25A2.4 2.4 0 014 19a2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.401 2.401 0 012-1 2.4 2.4 0 012 1 2.401 2.401 0 002 1 2.4 2.4 0 002-1 2.401 2.401 0 012-1 2.4 2.4 0 011 .25"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BeachIcon;
/* prettier-ignore-end */
