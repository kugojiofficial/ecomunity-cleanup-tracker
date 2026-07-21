/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandEmberIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandEmberIcon(props: BrandEmberIconProps) {
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
          "M3 12.958c8.466 1.647 11.112-1.196 12.17-2.294 2.116-2.196 0-6.589-2.646-5.49C9.88 6.27 6.174 12.86 9.35 17.252 11.466 20.18 15.35 19.43 21 15"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandEmberIcon;
/* prettier-ignore-end */
