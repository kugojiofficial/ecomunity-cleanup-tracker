/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AdjustmentsHorizontalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AdjustmentsHorizontalIcon(
  props: AdjustmentsHorizontalIconProps
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
          "M12 6a2 2 0 104 0 2 2 0 00-4 0zM4 6h8m4 0h4M6 12a2 2 0 104 0 2 2 0 00-4 0zm-2 0h2m4 0h10m-5 6a2 2 0 104 0 2 2 0 00-4 0zM4 18h11m4 0h1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AdjustmentsHorizontalIcon;
/* prettier-ignore-end */
