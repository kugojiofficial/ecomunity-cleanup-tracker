/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BooksOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BooksOffIcon(props: BooksOffIconProps) {
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
          "M9 9v10a1 1 0 01-1 1H6a1 1 0 01-1-1V5m3-1a1 1 0 011 1m0 0a1 1 0 011-1h2a1 1 0 011 1v4m0 4v6a1 1 0 01-1 1h-2a1 1 0 01-1-1V9M5 8h3m1 8h4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M14.254 10.244L13.036 5.82a1.02 1.02 0 01.634-1.219l.133-.041 2.184-.53c.562-.135 1.133.19 1.282.732l3.236 11.75m-.92 3.077l-1.572.38c-.562.136-1.133-.19-1.282-.731l-.952-3.458M14 9l4-1m1.207 7.199l.716-.18M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BooksOffIcon;
/* prettier-ignore-end */
