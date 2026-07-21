/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AugmentedRealityOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AugmentedRealityOffIcon(props: AugmentedRealityOffIconProps) {
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
          "M4 8V6c0-.557.228-1.061.595-1.424M4 16v2a2 2 0 002 2h2m8-16h2a2 2 0 012 2v2m-4 12h2c.558 0 1.062-.228 1.425-.596M12 12.5l.312-.195m2.457-1.536L16 10m-6.775-.765L8 10l4 2.5V17l3.076-1.923M16 12v-2l-4-2.5-.302.189"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M8 10v4.5l4 2.5M3 3l18 18"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AugmentedRealityOffIcon;
/* prettier-ignore-end */
