/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ServerOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ServerOffIcon(props: ServerOffIconProps) {
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
          "M12 12H6a3 3 0 01-3-3V7c0-1.083.574-2.033 1.435-2.56M8 4h10a3 3 0 013 3v2a3 3 0 01-3 3h-2m0 0h2a3 3 0 013 3v2m-1.448 2.568A2.986 2.986 0 0118 20H6a3 3 0 01-3-3v-2a3 3 0 013-3h6M7 8v.01M7 16v.01M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ServerOffIcon;
/* prettier-ignore-end */
