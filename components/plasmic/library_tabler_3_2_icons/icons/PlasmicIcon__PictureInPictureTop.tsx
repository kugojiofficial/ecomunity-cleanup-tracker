/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PictureInPictureTopIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PictureInPictureTopIcon(props: PictureInPictureTopIconProps) {
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
          "M11 4a1 1 0 110 2H5a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1v-4a1 1 0 012 0v4a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h6z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M20 4a2 2 0 012 2v3a2 2 0 01-2 2h-5a2 2 0 01-2-2V6a2 2 0 012-2h5z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PictureInPictureTopIcon;
/* prettier-ignore-end */
