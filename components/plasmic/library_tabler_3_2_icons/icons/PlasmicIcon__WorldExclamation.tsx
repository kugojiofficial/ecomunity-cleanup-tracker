/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WorldExclamationIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WorldExclamationIcon(props: WorldExclamationIconProps) {
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
          "M20.986 12.51a9 9 0 10-5.71 7.873M3.6 9h16.8M3.6 15h10.9m-3-12a17 17 0 000 18m1-18a17 17 0 010 18m6.5-5v3m0 3v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WorldExclamationIcon;
/* prettier-ignore-end */
