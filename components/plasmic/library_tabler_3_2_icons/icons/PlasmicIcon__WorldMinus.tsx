/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WorldMinusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WorldMinusIcon(props: WorldMinusIconProps) {
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
          "M20.483 15.006a9 9 0 10-7.958 5.978M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18m1-18a16.94 16.94 0 012.307 12M16 19h6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WorldMinusIcon;
/* prettier-ignore-end */
