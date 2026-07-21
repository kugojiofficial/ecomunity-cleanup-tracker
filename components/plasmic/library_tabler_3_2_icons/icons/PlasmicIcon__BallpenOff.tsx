/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BallpenOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BallpenOffIcon(props: BallpenOffIconProps) {
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
        d={"M14 6l7 7-2 2m-9-5l-4.172 4.172a2.828 2.828 0 104 4L14 14"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M16 12l4.414-4.414a2 2 0 000-2.829l-1.171-1.171a2 2 0 00-2.829 0L12 8M4 20l1.768-1.768M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BallpenOffIcon;
/* prettier-ignore-end */
