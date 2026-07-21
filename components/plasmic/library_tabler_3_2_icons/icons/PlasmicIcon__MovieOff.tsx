/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MovieOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MovieOffIcon(props: MovieOffIconProps) {
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
          "M8 4h10a2 2 0 012 2v10m-.592 3.42c-.362.359-.859.58-1.408.58H6a2 2 0 01-2-2V6c0-.539.213-1.028.56-1.388M8 8v12m8-16v8m0 4v4M4 8h4m-4 8h4m-4-4h8m4 0h4m-4-4h4M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MovieOffIcon;
/* prettier-ignore-end */
