/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IceCreamOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IceCreamOffIcon(props: IceCreamOffIconProps) {
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
          "M12 21.5V17M8 8v9h8v-1m0-4V7a4 4 0 00-7.277-2.294M8 10.5l1.74-.76m2.79-1.222L16 7m-8 7.5l4.488-1.964M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IceCreamOffIcon;
/* prettier-ignore-end */
