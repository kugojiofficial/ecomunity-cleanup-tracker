/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DiscountOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DiscountOffIcon(props: DiscountOffIconProps) {
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
          "M9 15l3-3m2-2l1-1m-5.852.145A.498.498 0 009.5 10a.5.5 0 00.35-.142m4.298 4.287A.498.498 0 0014.5 15a.5.5 0 00.35-.142"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5.641 5.631A9 9 0 0018.36 18.369m1.68-2.318A9 9 0 007.966 3.953M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DiscountOffIcon;
/* prettier-ignore-end */
