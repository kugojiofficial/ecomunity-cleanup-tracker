/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CloudStarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CloudStarIcon(props: CloudStarIconProps) {
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
          "M9.5 18.004H6.657C4.085 18 2 15.993 2 13.517c0-2.475 2.085-4.482 4.657-4.482.393-1.762 1.794-3.2 3.675-3.773 1.88-.572 3.956-.193 5.444 1 1.209.967 1.88 2.347 1.88 3.776m.144 10.779l-2.172 1.138a.392.392 0 01-.568-.41l.415-2.411-1.757-1.707a.39.39 0 01.217-.665l2.428-.352 1.086-2.193a.392.392 0 01.702 0l1.086 2.193 2.428.352a.391.391 0 01.217.665l-1.757 1.707.414 2.41a.39.39 0 01-.567.411L17.8 20.817z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CloudStarIcon;
/* prettier-ignore-end */
