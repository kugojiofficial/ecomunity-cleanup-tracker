/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PanoramaHorizontalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PanoramaHorizontalIcon(props: PanoramaHorizontalIconProps) {
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
          "M4.338 5.53c5.106 1.932 10.211 1.932 15.317 0A1 1 0 0121 6.464v11c0 .692-.692 1.2-1.34.962-5.107-1.932-10.214-1.932-15.321 0A.993.993 0 013 17.491V6.464a1 1 0 011.338-.935v.001z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PanoramaHorizontalIcon;
/* prettier-ignore-end */
