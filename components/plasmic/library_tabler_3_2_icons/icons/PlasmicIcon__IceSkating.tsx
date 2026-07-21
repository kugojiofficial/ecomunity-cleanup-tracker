/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IceSkatingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IceSkatingIcon(props: IceSkatingIconProps) {
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
          "M5.905 5h3.418a1 1 0 01.928.629l1.143 2.856a3 3 0 002.207 1.83l4.717.926A2.084 2.084 0 0120 13.286V14a1 1 0 01-1 1H5.105a1 1 0 01-1-1.1l.8-8a1 1 0 011-.9zM3 19h17a1 1 0 001-1M9 15v4m6-4v4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IceSkatingIcon;
/* prettier-ignore-end */
