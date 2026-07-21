/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowBigLeftLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowBigLeftLineIcon(props: ArrowBigLeftLineIconProps) {
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
          "M12 15v3.586a1 1 0 01-1.707.707l-6.586-6.586a1 1 0 010-1.414l6.586-6.586A1 1 0 0112 5.414V9h6v6h-6zm9 0V9"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArrowBigLeftLineIcon;
/* prettier-ignore-end */
