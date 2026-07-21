/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BallFootballOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BallFootballOffIcon(props: BallFootballOffIconProps) {
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
          "M20.041 16.046A9 9 0 007.957 3.956M5.634 5.639a9 9 0 0012.726 12.73"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12 7l4.755 3.455-.566 1.743-.98 3.014L15 16H9l-1.755-5.545 1.86-1.351 2.313-1.681L12 7zm0 0V3m3 13l2.5 3m-.745-8.545L20.5 9M9.061 16.045L6.5 19m.745-8.545L3.5 9M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BallFootballOffIcon;
/* prettier-ignore-end */
