/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EyeTableIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EyeTableIcon(props: EyeTableIconProps) {
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
          "M8 18h-.011M12 18h-.011M16 18h-.011M4 3h16M5 3v17a1 1 0 001 1h12a1 1 0 001-1V3m-5 4h-4m-1 8h1m4 0h1m-3-4V7"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default EyeTableIcon;
/* prettier-ignore-end */
