/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyGuaraniIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyGuaraniIcon(props: CurrencyGuaraniIconProps) {
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
          "M16.007 7.54A5.965 5.965 0 0011.999 6a6 6 0 00-5.992 6c0 3.314 2.682 6 5.992 6a5.965 5.965 0 004-1.536c.732-.66 1.064-2.148 1-4.464h-5M12 20V4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrencyGuaraniIcon;
/* prettier-ignore-end */
