/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AlbumOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AlbumOffIcon(props: AlbumOffIconProps) {
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
          "M8 4h10a2 2 0 012 2v10m-.581 3.41c-.362.364-.864.59-1.419.59H6a2 2 0 01-2-2V6c0-.552.224-1.052.585-1.413"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M12 4v4m1.503 1.497L14 9l2 2V4M3 3l18 18"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AlbumOffIcon;
/* prettier-ignore-end */
