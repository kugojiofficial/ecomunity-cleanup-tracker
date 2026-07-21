/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BooksIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BooksIcon(props: BooksIconProps) {
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
          "M5 5a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1H6a1 1 0 01-1-1V5zm4 0a1 1 0 011-1h2a1 1 0 011 1v14a1 1 0 01-1 1h-2a1 1 0 01-1-1V5zM5 8h4m0 8h4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M13.803 4.56l2.184-.53c.562-.135 1.133.19 1.282.732l3.695 13.418a1.02 1.02 0 01-.634 1.219l-.133.041-2.184.53c-.562.135-1.133-.19-1.282-.732L13.036 5.82a1.02 1.02 0 01.634-1.219l.133-.041zM14 9l4-1m-2 8l3.923-.98"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BooksIcon;
/* prettier-ignore-end */
