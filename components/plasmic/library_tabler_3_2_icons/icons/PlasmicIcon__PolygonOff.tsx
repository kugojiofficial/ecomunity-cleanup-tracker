/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PolygonOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PolygonOffIcon(props: PolygonOffIconProps) {
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
          "M10 5a2 2 0 104 0 2 2 0 00-4 0zm7 3a2 2 0 104 0 2 2 0 00-4 0zM3 11a2 2 0 104 0 2 2 0 00-4 0zm10 8a2 2 0 104 0 2 2 0 00-4 0zM6.5 9.5l1.546-1.311M14 5.5L17 7m1.5 3l-1.185 3.318m-1.062 2.972L16 17m-2.5.5l-7-5M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PolygonOffIcon;
/* prettier-ignore-end */
