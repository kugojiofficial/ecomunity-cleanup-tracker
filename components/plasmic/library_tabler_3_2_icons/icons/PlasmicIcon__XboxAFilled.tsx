/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type XboxAFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function XboxAFilledIcon(props: XboxAFilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.936 5.649c-.324-.865-1.548-.865-1.872 0l-3 8a1 1 0 00.585 1.287l.111.035a1 1 0 001.176-.62L10.443 15h3.114l.507 1.351a1.002 1.002 0 001.633.4 1.003 1.003 0 00.239-1.102l-3-8zM12 10.848L12.807 13h-1.614L12 10.848z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default XboxAFilledIcon;
/* prettier-ignore-end */
