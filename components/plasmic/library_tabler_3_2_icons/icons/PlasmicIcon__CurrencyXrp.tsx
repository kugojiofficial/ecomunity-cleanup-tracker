/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyXrpIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyXrpIcon(props: CurrencyXrpIconProps) {
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
          "M5 5l3.585 3.585a4.83 4.83 0 006.83 0L19 5M5 19l3.585-3.585a4.83 4.83 0 016.83 0L19 18.999"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrencyXrpIcon;
/* prettier-ignore-end */
