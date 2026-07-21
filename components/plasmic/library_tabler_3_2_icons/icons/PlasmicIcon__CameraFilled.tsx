/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CameraFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CameraFilledIcon(props: CameraFilledIconProps) {
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
          "M15 3a2 2 0 011.995 1.85L17 5a1 1 0 00.883.993L18 6h1a3 3 0 012.995 2.824L22 9v9a3 3 0 01-2.824 2.995L19 21H5a3 3 0 01-2.995-2.824L2 18V9a3 3 0 012.824-2.995L5 6h1a1 1 0 001-1 2 2 0 011.85-1.995L9 3h6zm-3 7a3 3 0 00-2.985 2.698l-.011.152L9 13l.004.15A3 3 0 1012 10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CameraFilledIcon;
/* prettier-ignore-end */
