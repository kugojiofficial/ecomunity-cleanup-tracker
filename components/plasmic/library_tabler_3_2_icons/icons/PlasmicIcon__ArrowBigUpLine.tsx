/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowBigUpLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowBigUpLineIcon(props: ArrowBigUpLineIconProps) {
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
          "M9 12H5.414a1 1 0 01-.707-1.707l6.586-6.586a1 1 0 011.414 0l6.586 6.586A1 1 0 0118.586 12H15v6H9v-6zm0 9h6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArrowBigUpLineIcon;
/* prettier-ignore-end */
