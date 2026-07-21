/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyOffIcon(props: CurrencyOffIconProps) {
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
          "M18.531 14.524a7 7 0 00-9.06-9.053M7.049 7.053a7 7 0 009.903 9.896M4 4l3 3m13-3l-3 3M4 20l3-3m13 3l-3-3M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrencyOffIcon;
/* prettier-ignore-end */
