/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BaguetteIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BaguetteIcon(props: BaguetteIconProps) {
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
          "M5.628 11.283l5.644-5.637c2.665-2.663 5.924-3.747 8.663-1.205l.188.181a2.989 2.989 0 010 4.228L8.836 20.124a3 3 0 01-4.089.135l-.143-.135C1.876 17.4 2.9 14.007 5.628 11.283zM9.5 7.5L11 11m-4.5-.5L8 14m4.5-9.5L14 8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BaguetteIcon;
/* prettier-ignore-end */
