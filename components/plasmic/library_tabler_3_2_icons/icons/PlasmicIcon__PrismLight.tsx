/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PrismLightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PrismLightIcon(props: PrismLightIconProps) {
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
          "M4.731 19H16.27a1 1 0 00.866-1.5l-5.769-10a1 1 0 00-1.732 0l-5.769 10a1 1 0 00.865 1.5zM2 13h4.45M18 5l-4.5 6M22 9l-7.75 3.25M22 15l-7-1.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PrismLightIcon;
/* prettier-ignore-end */
