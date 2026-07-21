/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HelpCircleFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HelpCircleFilledIcon(props: HelpCircleFilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10a10 10 0 01-19.995.324L2 12l.004-.28C2.152 6.327 6.57 2 12 2zm0 13a1 1 0 00-.993.883L11 16l.007.127a1 1 0 001.986 0L13 16.01l-.007-.127A1 1 0 0012 15zm1.368-6.673a2.98 2.98 0 00-3.631.728 1 1 0 001.44 1.383l.171-.18a.98.98 0 011.11-.15 1 1 0 01-.34 1.886l-.232.012A1 1 0 0011.997 14a3 3 0 001.371-5.673z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HelpCircleFilledIcon;
/* prettier-ignore-end */
