/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MedicineSyrupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MedicineSyrupIcon(props: MedicineSyrupIconProps) {
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
          "M8 21h8a1 1 0 001-1V10a3 3 0 00-3-3h-4a3 3 0 00-3 3v10a1 1 0 001 1zm2-7h4m-2-2v4m-2-9V4a1 1 0 011-1h2a1 1 0 011 1v3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MedicineSyrupIcon;
/* prettier-ignore-end */
