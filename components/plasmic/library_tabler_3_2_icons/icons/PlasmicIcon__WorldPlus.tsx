/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WorldPlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WorldPlusIcon(props: WorldPlusIconProps) {
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
          "M20.985 12.518a9 9 0 10-8.45 8.466M3.6 9h16.8M3.6 15H15M11.5 3a17 17 0 000 18m1-18a16.998 16.998 0 012.283 12.157M16 19h6m-3-3v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WorldPlusIcon;
/* prettier-ignore-end */
