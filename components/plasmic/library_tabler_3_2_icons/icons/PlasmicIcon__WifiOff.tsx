/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WifiOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WifiOffIcon(props: WifiOffIconProps) {
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
          "M12 18h.01m-2.838-2.828a4 4 0 015.656 0m-8.485-2.829a7.963 7.963 0 013.864-2.14m4.163.155a7.965 7.965 0 013.287 2M3.515 9.515A12 12 0 017.059 7.06m3.101-.92a12 12 0 0110.325 3.374M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WifiOffIcon;
/* prettier-ignore-end */
