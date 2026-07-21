/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyDollarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyDollarIcon(props: CurrencyDollarIconProps) {
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
          "M16.7 8A3 3 0 0014 6h-4a3 3 0 100 6h4a3 3 0 010 6h-4a3 3 0 01-2.7-2M12 3v3m0 12v3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrencyDollarIcon;
/* prettier-ignore-end */
