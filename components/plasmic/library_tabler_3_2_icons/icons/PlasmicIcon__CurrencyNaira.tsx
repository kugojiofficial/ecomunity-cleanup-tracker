/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyNairaIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyNairaIcon(props: CurrencyNairaIconProps) {
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
          "M7 18V7.052a1.05 1.05 0 011.968-.51l6.064 10.916a1.05 1.05 0 001.968-.51V6M5 10h14M5 14h14"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrencyNairaIcon;
/* prettier-ignore-end */
