/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandTaobaoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandTaobaoIcon(props: BrandTaobaoIconProps) {
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
          "M2 5c.968.555 1.335 1.104 2 2m-2 3c5.007 3.674 2.85 6.544 0 10m8-16c-.137 4.137-2.258 5.286-3.709 6.684M10 6c2.194-.8 3.736-.852 6.056-.993 4.206-.158 5.523 2.264 5.803 5.153.428 4.396-.077 7.186-2.117 9.298-1.188 1.23-3.238 2.62-7.207.259M11 10h6m-4 0v6.493M8 13h10m-2 2.512l.853 1.72M16.5 17c-1.145.361-7 3-8.5-.5m3.765-7.961L10 11"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandTaobaoIcon;
/* prettier-ignore-end */
