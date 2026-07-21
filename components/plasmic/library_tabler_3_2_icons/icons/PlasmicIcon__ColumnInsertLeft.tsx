/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ColumnInsertLeftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ColumnInsertLeftIcon(props: ColumnInsertLeftIconProps) {
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
          "M14 4h4a1 1 0 011 1v14a1 1 0 01-1 1h-4a1 1 0 01-1-1V5a1 1 0 011-1zm-9 8h4m-2-2v4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ColumnInsertLeftIcon;
/* prettier-ignore-end */
