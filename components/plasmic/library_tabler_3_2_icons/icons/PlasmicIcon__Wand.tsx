/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WandIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WandIcon(props: WandIconProps) {
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
          "M6 21L21 6l-3-3L3 18l3 3zm9-15l3 3M9 3a2 2 0 002 2 2 2 0 00-2 2 2 2 0 00-2-2 2 2 0 002-2zm10 10a2 2 0 002 2 2 2 0 00-2 2 2 2 0 00-2-2 2 2 0 002-2z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WandIcon;
/* prettier-ignore-end */
