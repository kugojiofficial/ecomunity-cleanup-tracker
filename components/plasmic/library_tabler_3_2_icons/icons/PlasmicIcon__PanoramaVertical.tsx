/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PanoramaVerticalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PanoramaVerticalIcon(props: PanoramaVerticalIconProps) {
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
          "M18.463 4.338c-1.932 5.106-1.932 10.211 0 15.317A1 1 0 0117.529 21h-11c-.692 0-1.208-.692-.962-1.34 1.932-5.107 1.932-10.214 0-15.321C5.321 3.691 5.81 3 6.502 3H17.53c.693 0 1.18.691.935 1.338h-.002z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PanoramaVerticalIcon;
/* prettier-ignore-end */
