/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyBahtIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyBahtIcon(props: CurrencyBahtIconProps) {
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
          "M8 6h5a3 3 0 013 3v.143A2.857 2.857 0 0113.143 12H8m0 0h5a3 3 0 013 3v.143A2.857 2.857 0 0113.143 18H8M8 6v12m3-14v2m0 12v2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrencyBahtIcon;
/* prettier-ignore-end */
