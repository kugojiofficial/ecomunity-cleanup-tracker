/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SmartHomeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SmartHomeIcon(props: SmartHomeIconProps) {
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
          "M19 8.71l-5.333-4.148a2.666 2.666 0 00-3.274 0L5.059 8.71a2.665 2.665 0 00-1.029 2.105v7.2a2 2 0 002 2h12a2 2 0 002-2v-7.2c0-.823-.38-1.6-1.03-2.105zM16 15c-2.21 1.333-5.792 1.333-8 0"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SmartHomeIcon;
/* prettier-ignore-end */
