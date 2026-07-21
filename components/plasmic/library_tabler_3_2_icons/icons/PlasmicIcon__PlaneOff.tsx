/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlaneOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlaneOffIcon(props: PlaneOffIconProps) {
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
          "M9.788 5.758L9 3h3l4 7h4a2 2 0 010 4h-2m-2.718 1.256L12 21H9l2-7H7l-2 2H2l2-4-2-4h3l2 2h3M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PlaneOffIcon;
/* prettier-ignore-end */
