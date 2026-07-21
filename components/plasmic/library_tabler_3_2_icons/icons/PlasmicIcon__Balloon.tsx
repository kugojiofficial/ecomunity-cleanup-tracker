/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BalloonIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BalloonIcon(props: BalloonIconProps) {
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
          "M14 8a2 2 0 00-2-2M6 8a6 6 0 1112 0c0 4.97-2.686 9-6 9s-6-4.03-6-9zm6 9v1a2 2 0 01-2 2H7a2 2 0 00-2 2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BalloonIcon;
/* prettier-ignore-end */
