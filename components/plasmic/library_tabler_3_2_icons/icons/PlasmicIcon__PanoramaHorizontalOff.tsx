/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PanoramaHorizontalOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PanoramaHorizontalOffIcon(
  props: PanoramaHorizontalOffIconProps
) {
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
          "M10.95 6.952c2.901.15 5.803-.323 8.705-1.42A1 1 0 0121 6.466V17m-3.212.806c-4.483-1.281-8.966-1.074-13.449.622A.994.994 0 013 17.493V6.466a1 1 0 011.338-.935c.588.221 1.176.418 1.764.59M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PanoramaHorizontalOffIcon;
/* prettier-ignore-end */
