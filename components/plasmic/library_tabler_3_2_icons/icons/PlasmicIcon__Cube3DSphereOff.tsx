/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Cube3DSphereOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Cube3DSphereOffIcon(props: Cube3DSphereOffIconProps) {
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
          "M6 17.6l-2-1.1V14m0-4V7.5l2-1.1m4-2.3L12 3l2 1.1m4 2.3l2 1.1V10m0 4v2m-6 3.9L12 21l-2-1.1m8-11.3l2-1.1M12 12v2.5m0 4V21m0-9l-2-1.12M6 8.6L4 7.5M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Cube3DSphereOffIcon;
/* prettier-ignore-end */
