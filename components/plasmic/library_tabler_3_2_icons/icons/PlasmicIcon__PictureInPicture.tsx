/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PictureInPictureIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PictureInPictureIcon(props: PictureInPictureIconProps) {
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
          "M19 4a3 3 0 013 3v4a1 1 0 01-2 0V7a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h6a1 1 0 010 2H5a3 3 0 01-3-3V7a3 3 0 013-3h14z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M20 13a2 2 0 012 2v3a2 2 0 01-2 2h-5a2 2 0 01-2-2v-3a2 2 0 012-2h5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PictureInPictureIcon;
/* prettier-ignore-end */
