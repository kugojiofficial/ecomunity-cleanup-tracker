/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShieldMinusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShieldMinusIcon(props: ShieldMinusIconProps) {
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
          "M12.46 20.871c-.153.046-.306.089-.46.129A12 12 0 013.5 6 12 12 0 0012 3a12 12 0 008.5 3 12 12 0 01-.916 9.015M16 19h6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ShieldMinusIcon;
/* prettier-ignore-end */
