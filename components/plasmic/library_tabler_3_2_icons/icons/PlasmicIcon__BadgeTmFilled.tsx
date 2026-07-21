/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BadgeTmFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BadgeTmFilledIcon(props: BadgeTmFilledIconProps) {
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
          "M19 4a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h14zm-9 4H6a1 1 0 000 2h1v5a1 1 0 00.883.993L8 16a1 1 0 001-1v-5h1a1 1 0 00.993-.883L11 9a1 1 0 00-1-1zm8 1c0-.99-1.283-1.378-1.832-.555L15 10.197l-1.168-1.752C13.283 7.622 12 8.011 12 9v6a1 1 0 001 1l.117-.007A1 1 0 0014 15v-2.697l.168.252.08.104a1 1 0 001.584-.104l.168-.253V15a1 1 0 002 0V9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BadgeTmFilledIcon;
/* prettier-ignore-end */
