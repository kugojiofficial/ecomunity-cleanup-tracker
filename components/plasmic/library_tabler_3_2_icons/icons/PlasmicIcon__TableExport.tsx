/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TableExportIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TableExportIcon(props: TableExportIconProps) {
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
          "M12.5 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v7.5M3 10h18M10 3v18m6-2h6m-3-3l3 3-3 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TableExportIcon;
/* prettier-ignore-end */
