/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShovelPitchforksIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShovelPitchforksIcon(props: ShovelPitchforksIconProps) {
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
          "M5 3h4M7 3v12m-3 0h6v3a3 3 0 01-6 0v-3zm10 6v-3a3 3 0 016 0v3m-3 0V3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ShovelPitchforksIcon;
/* prettier-ignore-end */
