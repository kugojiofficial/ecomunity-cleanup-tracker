/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ruler2OffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ruler2OffIcon(props: Ruler2OffIconProps) {
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
          "M12.03 7.97L17 3l4 4-5 5m-2 2l-7 7-4-4 7-7m6-3l-1.5-1.5M10 13l-1.5-1.5M7 16l-1.5-1.5M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Ruler2OffIcon;
/* prettier-ignore-end */
