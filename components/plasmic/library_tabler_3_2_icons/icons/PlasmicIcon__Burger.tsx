/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BurgerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BurgerIcon(props: BurgerIconProps) {
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
          "M4 15h16a4 4 0 01-4 4H8a4 4 0 01-4-4zm8-11c3.783 0 6.953 2.133 7.786 5H4.214C5.047 6.133 8.217 4 12 4zm-7 8h14"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BurgerIcon;
/* prettier-ignore-end */
