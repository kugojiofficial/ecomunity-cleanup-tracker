/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MaximizeOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MaximizeOffIcon(props: MaximizeOffIconProps) {
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
          "M4 8V6c0-.551.223-1.05.584-1.412M4 16v2a2 2 0 002 2h2m8-16h2a2 2 0 012 2v2m-4 12h2c.545 0 1.04-.218 1.4-.572M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MaximizeOffIcon;
/* prettier-ignore-end */
