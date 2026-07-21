/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyDollarOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyDollarOffIcon(props: CurrencyDollarOffIconProps) {
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
          "M16.7 8A3 3 0 0014 6h-4M7.443 7.431A3 3 0 0010 12h2m4.564 4.558A3 3 0 0114 18h-4a3 3 0 01-2.7-2M12 3v3m0 12v3M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrencyDollarOffIcon;
/* prettier-ignore-end */
