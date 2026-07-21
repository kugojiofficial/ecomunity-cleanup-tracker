/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UmbrellaOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UmbrellaOffIcon(props: UmbrellaOffIconProps) {
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
          "M12 12H4c0-2.209.895-4.208 2.342-5.656m2.382-1.645A8 8 0 0120 12h-4m-4 0v6a2 2 0 004 0M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default UmbrellaOffIcon;
/* prettier-ignore-end */
